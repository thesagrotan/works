import { useState, useEffect } from 'react';
import { Leva } from 'leva';
import HomePage from './components/HomePage';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Initialize state from URL on mount
  useEffect(() => {
    const path = window.location.pathname.slice(1); // Remove leading slash
    if (path && path !== '') {
      setSelectedProject(path);
    }
  }, []);

  // Listen for browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.slice(1);
      setSelectedProject(path || null);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle opening a project - update URL
  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
    window.history.pushState({}, '', `/${projectId}`);
  };

  // Handle closing modal - remove from URL
  const handleCloseModal = () => {
    setSelectedProject(null);
    window.history.pushState({}, '', '/');
  };

  return (
    <>
      {/* Hide Leva controls UI by default; toggle via env if needed */}
      <Leva hidden collapsed />
      <HomePage onProjectClick={handleProjectClick} />
      {selectedProject && (
        <ProjectModal 
          projectId={selectedProject} 
          onClose={handleCloseModal} 
        />
      )}
    </>
  );
}
