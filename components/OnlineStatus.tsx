import React, { useEffect, useState } from 'react';

export const OnlineStatus: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const checkOnlineStatus = () => {
      const now = new Date();
      const istTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      
      const hour = istTime.getHours();
      
      // Online from 6 AM to 11 PM (6:00 - 22:59)
      const online = hour >= 6 && hour < 23;
      setIsOnline(online);
    };

    checkOnlineStatus();
    const interval = setInterval(checkOnlineStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <span 
      className={`inline-block w-2 h-2 rounded-full mr-1.5 ${
        isOnline 
          ? 'bg-accent-green animate-pulse' 
          : 'bg-red-500'
      }`}
      title={isOnline ? 'Online' : 'Offline'}
    ></span>
  );
};
