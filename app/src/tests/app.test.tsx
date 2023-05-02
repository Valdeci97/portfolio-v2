import App from '../App';
import { render, screen } from './utils';

test('Should render Hello world', () => {
  render(<App />);
  const main = screen.getByText(/hello world/i);
  expect(main).toBeInTheDocument();
});
