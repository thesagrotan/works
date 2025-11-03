// AI_GOOD: Unit test for extracted PortfolioProjectCard to ensure rendering and click callback fidelity.
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PortfolioProjectCard from '../components/PortfolioProjectCard';
import { projects } from '../data/projects';
import { LayoutGroup } from 'motion/react';

describe('PortfolioProjectCard', () => {
  it('renders categories and images, and invokes onClick with project id', async () => {
    const user = userEvent.setup();
    const project = projects[0];
    const onClick = vi.fn();

    const { container } = render(
      <LayoutGroup>
        <PortfolioProjectCard
          project={project}
          onClick={onClick}
          hoverScale={1.05}
          hoverDuration={0.2}
          layoutType="spring"
          layoutExitDamping={20}
          layoutStiffness={300}
          layoutDuration={0.3}
        />
      </LayoutGroup>
    );

    // Categories should be present
    for (const cat of project.categories) {
      expect(screen.getByText(cat)).toBeInTheDocument();
    }

    // Three images with expected alt texts
    const alts = project.images.card.map((img) => img.alt);
    for (const alt of alts) {
      expect(screen.getByAltText(alt)).toBeInTheDocument();
    }

    // Clicking the card calls onClick with the project id
    const btn = screen.getByRole('button');
    await user.click(btn);
    expect(onClick).toHaveBeenCalledWith(project.id);
  });
});
