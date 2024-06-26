import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import TableHeader from './components/SlipTable/TableHeader';
import { TITLE_ARRAY } from './constraints';
import '@testing-library/jest-dom';
import TableBody from './components/SlipTable/TableBody';
import SlipBasket from './components/SlipBasket';

test('renders table header', () => {
	render(<TableHeader betCount={5} />);

	expect(screen.getByText('Event Count: 5')).toBeInTheDocument();
});

test('renders bet basket header', () => {
	render(<SlipBasket />);

	expect(screen.getByText('Kuponum')).toBeInTheDocument();
});

test('renders bet basket header total count', () => {
	render(<SlipBasket />);

	expect(screen.getByText('Maç: 0')).toBeInTheDocument();
});
