import { useState } from 'react';
import { Leva } from 'leva';
import HomePage from './components/HomePage';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <>
      <Leva collapsed={false} />
      <HomePage onProjectClick={setSelectedProject} />
      {selectedProject && (
        <ProjectModal 
          projectId={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}
