import { useState } from 'react';
import { Leva } from 'leva';
import HomePage from './components/HomePage';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <>
      {/* Hide Leva controls UI by default; toggle via env if needed */}
      <Leva hidden collapsed />
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
