import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import mockData from './mockData';

describe('<App /> test scenarios', () => {

  it('renders add todo title', () => {
    render(<App tasks={mockData} />);
    const linkElement = screen.getByText(/What needs to be done?/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should remove item on delete', () => {
    render(<App tasks={mockData} />);
    userEvent.click(screen.getByTestId(`delete-${mockData[2].id}`));
    expect(screen.queryByText(mockData[2].name)).not.toBeInTheDocument();
  })

});