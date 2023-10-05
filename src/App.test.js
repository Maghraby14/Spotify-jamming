import { render, screen } from '@testing-library/react';
import App from './App';
const assert =require('assert');
const Appp = require('./App');
test('renders Search button Elements', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Search/i);
  expect(buttonElement).toBeInTheDocument();
});
test('renders SaveToSpotify button Elements', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Save To Spotify/i);
  expect(buttonElement).toBeInTheDocument();
});
test('renders Search Label button Elements', () => {
  render(<App />);
  const buttonElement = screen.getByPlaceholderText(/Enter Track Name/i);
  expect(buttonElement).toBeInTheDocument();
});
test('renders Save to playlist Label button Elements', () => {
  render(<App />);
  const buttonElement = screen.getByPlaceholderText(/Enter playlist name/i);
  expect(buttonElement).toBeInTheDocument();
});

