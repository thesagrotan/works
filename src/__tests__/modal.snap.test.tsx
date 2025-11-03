// AI_GOOD: Baseline interaction test opens ProjectModal and asserts stable backdrop style and paragraph content.
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { projects } from '../data/projects';

describe('ProjectModal baseline snapshot', () => {
  it('opens from first card and matches stable attributes', async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);

    // Click the first project card button (unnamed); skip buttons with a visible label like "Get in touch"
    const allButtons = screen.getAllByRole('button');
    const cardButton = allButtons.find((btn) => !/get in touch/i.test(btn.textContent || ''));
    expect(cardButton).toBeTruthy();
    await user.click(cardButton!);

    // Backdrop should be present with inline rgba color using default backdropOpacity (0.4)
    const backdrop = container.querySelector('[style*="rgba(0, 0, 0, 0.4)"]') as HTMLElement | null;
    expect(backdrop).toBeInTheDocument();
    expect(backdrop).toHaveStyle('background-color: rgba(0, 0, 0, 0.4)');

    // Verify longDescription paragraphs are rendered for the first project
    const firstProject = projects[0];
    const expectedParagraphs = firstProject.longDescription
      .split('\n\n')
      .map((p) => p.trim())
      .filter((p) => p.length > 0);

    for (const p of expectedParagraphs) {
      // Using findByText could be async due to animation; but text is present synchronously in DOM structure
      expect(screen.getByText(p, { exact: false })).toBeInTheDocument();
    }
  });
});
