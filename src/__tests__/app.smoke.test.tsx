// AI_GOOD: Smoke test renders <App /> and asserts key content without relying on animation timing.
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App smoke test', () => {
  it('renders hero copy and Selected Work heading', () => {
    render(<App />);
    // Hero intro text fragment
    expect(screen.getByText(/I'm Daniel Campagne/i)).toBeInTheDocument();
    // Section heading
    expect(screen.getByText(/Selected Work/i)).toBeInTheDocument();
  });
});
