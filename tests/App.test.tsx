import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHeader from '../src/components/SlipTable/TableHeader';
import { TITLE_ARRAY } from '../src/constraints';
import '@testing-library/jest-dom';
import SlipBasket from '../src/components/SlipBasket';

test('renders table header', () => {
	render(<TableHeader betCount={5} />);

	expect(screen.getByText('Event Count: 5')).toBeInTheDocument();
});

test('renders bet basket header total count', () => {
	render(<SlipBasket />);

	expect(screen.getByText('Toplam Oynanan: 0')).toBeInTheDocument();
});
