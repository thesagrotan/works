// AI_GOOD: Baseline snapshot for HomePage focusing on stable semantics (text, image alts, layoutId markers)
import { render, screen } from '@testing-library/react';
import HomePage from '../components/HomePage';
import { projects } from '../data/projects';

describe('HomePage baseline snapshot', () => {
  it('captures stable DOM semantics for Selected Work', () => {
    const { container } = render(<HomePage onProjectClick={() => { /* no-op */ }} />);

    // Presence of section heading (already covered in smoke, included here for baseline context)
    expect(screen.getByText(/Selected Work/i)).toBeInTheDocument();

    // Collect first three <img> alts which should belong to the first project card
    const imgs = container.querySelectorAll('img');
    const firstThreeAlts = Array.from(imgs)
      .slice(0, 3)
      .map((img) => img.getAttribute('alt'));

    // Verify layoutId strings are present in HTML (as rendered by Framer Motion)
    // AI_CLARIFY: We assert by string presence to avoid coupling to specific data-attribute name.
    const firstProjectId = projects[0].id;
    const html = container.innerHTML;
    const layoutIdMarkers = [
      `${firstProjectId}-img-1`,
      `${firstProjectId}-img-2`,
      `${firstProjectId}-img-3`,
    ];

    const snapshot = {
      selectedWorkProjects: projects.length,
      firstCardAltTexts: firstThreeAlts,
      layoutIdMarkersPresent: layoutIdMarkers.map((m) => html.includes(m)),
    };

    expect(snapshot).toMatchSnapshot();
  });
});
