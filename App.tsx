import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SideProjectsSection } from './components/SideProjectsSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { ProjectsPage } from './components/ProjectsPage';
import { ProductsPage } from './components/ProductsPage';
import { HireMePage } from './components/HireMePage';
import { ProjectDetailsPage } from './components/ProjectDetailsPage';
import { PERSONAL_INFO, PROJECTS, SIDE_PROJECTS, SOCIAL_LINKS, SKILLS } from './constants';
import { IntroAnimation } from './components/IntroAnimation';

// Wrapper component to handle navigation and theme
const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);
  
  // Theme state initialization
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  const handleAnimationComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  useEffect(() => {
    // Sync theme with HTML class and localStorage
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const handleSetPage = useCallback((page: string, projectId?: string) => {
    if (page === 'home') {
      navigate('/');
    } else if (page === 'project-detail' && projectId) {
      navigate(`/project/${projectId}`);
    } else {
      navigate(`/${page}`);
    }
    window.scrollTo(0, 0);
  }, [navigate]);

  // Menu tab order for swipe navigation
  const menuTabs = ['home', 'about', 'projects', 'products', 'hire'];

  // Get current page from location
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/project/')) return 'project-detail';
    return path.slice(1); // Remove leading slash
  };

  const currentPage = getCurrentPage();

  // Swipe gesture handlers (only on mobile, not on project-detail)
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const currentTabIdx = menuTabs.indexOf(currentPage);
  const goToTab = (idx: number) => {
    if (idx >= 0 && idx < menuTabs.length) {
      handleSetPage(menuTabs[idx]);
    }
  };
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (isMobile && currentTabIdx !== -1 && currentPage !== 'project-detail') {
        goToTab(currentTabIdx + 1);
      }
    },
    onSwipedRight: () => {
      if (isMobile && currentTabIdx !== -1 && currentPage !== 'project-detail') {
        goToTab(currentTabIdx - 1);
      }
    },
    trackTouch: true,
    trackMouse: false,
  });

  if (showIntro) {
    return <IntroAnimation onAnimationComplete={handleAnimationComplete} />;
  }

  return (
    <div className="min-h-screen flex flex-col" {...swipeHandlers}>
      <Header
        currentPage={currentPage}
        setCurrentPage={handleSetPage}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main 
        key={location.pathname} // Force re-render on route change for animations
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 md:space-y-24 flex-grow"
      >
        <Routes>
          <Route path="/" element={
            <>
              <Hero
                name={PERSONAL_INFO.name}
                title={PERSONAL_INFO.title}
                bio={PERSONAL_INFO.bio}
                imageUrl={PERSONAL_INFO.imageUrl}
                email={PERSONAL_INFO.email}
                setCurrentPage={handleSetPage}
              />
              <ProjectsSection 
                projects={PROJECTS} 
                onViewAllClick={() => handleSetPage('projects')} 
                setCurrentPage={handleSetPage}
                title="Featured Projects"
                maxItems={3}
              />
              <SideProjectsSection 
                sideProjects={SIDE_PROJECTS} 
                title="Explore My Products" 
                onViewAllClick={() => handleSetPage('products')}
                viewAllText="View All Products"
              />
              <CallToAction email={PERSONAL_INFO.email} setCurrentPage={handleSetPage} />
            </>
          } />
          
          <Route path="/about" element={
            <AboutPage 
              personalInfo={PERSONAL_INFO} 
              sideProjects={SIDE_PROJECTS} 
              email={PERSONAL_INFO.email} 
              setCurrentPage={handleSetPage} 
              theme={theme} 
              skills={SKILLS} 
            />
          } />
          
          <Route path="/projects" element={
            <ProjectsPage 
              projects={PROJECTS} 
              sideProjects={SIDE_PROJECTS} 
              email={PERSONAL_INFO.email} 
              setCurrentPage={handleSetPage} 
            />
          } />
          
          <Route path="/products" element={
            <ProductsPage 
              sideProjects={SIDE_PROJECTS} 
              personalInfo={{email: PERSONAL_INFO.email, productsPageIntro: PERSONAL_INFO.productsPageIntro }} 
              setCurrentPage={handleSetPage} 
            />
          } />
          
          <Route path="/hire" element={
            <HireMePage 
              personalInfo={PERSONAL_INFO} 
              socialLinks={SOCIAL_LINKS} 
              setCurrentPage={handleSetPage} 
            />
          } />
          
          <Route path="/project/:projectId" element={
            <ProjectDetailsPage 
              setCurrentPage={handleSetPage}
              email={PERSONAL_INFO.email}
            />
          } />
          
          <Route path="*" element={
            <div className="text-center py-10">
              <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
              <p className="text-text-secondary dark:text-dark-text-secondary mb-6">The page you are looking for does not exist.</p>
              <button
                onClick={() => handleSetPage('home')}
                className="px-4 py-2 bg-button-primary-bg text-button-primary-text rounded-lg hover:bg-button-primary-hover"
              >
                Go Home
              </button>
            </div>
          } />
        </Routes>
      </main>
      <Footer socialLinks={SOCIAL_LINKS} name={PERSONAL_INFO.name} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;