import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import GithubData from '../GithubData';
import { RootState } from '../../store';
jest.mock('axios');

const mockStore = configureStore<RootState>([]);

const mockUsers = [
  { login: 'dharma', avatar_url: 'https://example.com/dharma.png' },
  { login: 'wiguna', avatar_url: 'https://example.com/wiguna.png' },
];

describe('GithubData Component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      users: { users: mockUsers },
    });
  });

  test('renders search input and button', () => {
    render(
      <Provider store={store}>
        <GithubData />
      </Provider>
    );

    expect(
      screen.getByPlaceholderText('Search by login name')
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  test('renders user list from Redux store', () => {
    render(
      <Provider store={store}>
        <GithubData />
      </Provider>
    );

    expect(screen.getByText('dharmadev')).toBeInTheDocument();
    expect(screen.getByText('wigunadev')).toBeInTheDocument();
  });

  test('filters user list based on search term', () => {
    render(
      <Provider store={store}>
        <GithubData />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Search by login name');
    const button = screen.getByRole('button', { name: /search/i });

    fireEvent.change(input, { target: { value: 'dharmadev' } });
    fireEvent.click(button);

    expect(screen.getByText('dharmadev')).toBeInTheDocument();
    expect(screen.queryByText('wigunadev')).not.toBeInTheDocument();
  });

  test("shows 'No users found' if search does not match", () => {
    render(
      <Provider store={store}>
        <GithubData />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Search by login name');
    const button = screen.getByRole('button', { name: /search/i });

    fireEvent.change(input, { target: { value: 'nonexistentuser' } });
    fireEvent.click(button);

    expect(screen.getByText('No users found.')).toBeInTheDocument();
  });
});
