import React from 'react';
import { SlipBasketProvider } from './context/SlipBasket';
import SlipBasket from './components/SlipBasket';
import SlipTable from './components/SlipTable';

function App() {
	return (
		<SlipBasketProvider>
			<SlipTable />
			<SlipBasket />
		</SlipBasketProvider>
	);
}

export default App;
