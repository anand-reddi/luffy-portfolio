import { useEffect, useState } from 'react';
import { VISITOR_STATS } from '../constants';
import { db, isFirebaseConfigured } from '../lib/firebase';
import { doc, getDoc, setDoc, increment } from 'firebase/firestore';

/**
 * Returns the visitor count for the hero.
 * - By default: static number from VISITOR_STATS.staticCount (no Firebase).
 * - Live mode: only when VISITOR_STATS.enableLiveCount is true AND Firebase .env is set.
 */
export const useVisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(
    VISITOR_STATS.staticCount
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const useLive =
      VISITOR_STATS.enableLiveCount && isFirebaseConfigured && !!db;

    if (!useLive) {
      setVisitorCount(VISITOR_STATS.staticCount);
      setIsLive(false);
      setLoading(false);
      setError(null);
      return;
    }

    let cancelled = false;
    setLoading(true);

    const incrementVisitorCount = async () => {
      try {
        const statsDocRef = doc(db!, 'stats', 'website');
        const docSnap = await getDoc(statsDocRef);

        let nextCount: number;
        if (docSnap.exists()) {
          const currentCount = docSnap.data().visitors || 0;
          await setDoc(statsDocRef, { visitors: increment(1) }, { merge: true });
          nextCount = currentCount + 1;
        } else {
          await setDoc(statsDocRef, { visitors: 1 });
          nextCount = 1;
        }

        if (!cancelled) {
          setVisitorCount(nextCount);
          setIsLive(true);
          setError(null);
        }
      } catch (err) {
        console.error('Error tracking visitor count:', err);
        if (!cancelled) {
          // Fall back to static demo count so the UI still shows something
          setVisitorCount(VISITOR_STATS.staticCount);
          setIsLive(false);
          setError(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    void incrementVisitorCount();
    return () => {
      cancelled = true;
    };
  }, []);

  return { visitorCount, loading, error, isLive };
};
