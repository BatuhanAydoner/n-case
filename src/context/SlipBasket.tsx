import React, { createContext, useEffect, useState, PropsWithChildren } from 'react';
import { BASE_URL, RESULT_VALUES } from '../constraints';
import { IBet, ISelectedBet } from '../models/general';

export const CaseContext = createContext({
	bets: [] as IBet[],
	basketItems: [] as ISelectedBet[],
	addAndRemoveBasket: (result: RESULT_VALUES, item: IBet, o: number) => {},
	totalO: 0
});

export const SlipBasketProvider = ({ children }: PropsWithChildren<{}>) => {
	const [basketItems, setBasketItems] = useState<ISelectedBet[]>([]);
	const [bets, setBets] = useState<IBet[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(BASE_URL);
				if (!response.ok) throw new Error(`Network response was not ok ${response.statusText}`);
				const data = await response.json();
				setBets(data);
			} catch (error) {
				console.error('Fetch operation error:', error);
			}
		};
		fetchData();
	}, []);

	const addAndRemoveBasket = (result: RESULT_VALUES, item: IBet, valueO: number) => {
		const selectedItem: ISelectedBet = { C: item.C, N: item.N, O: valueO, selected: result };
		setBasketItems(prevItems => {
			// Find if there is already a selected item with the same criteria as the current item
			const selectedBet = prevItems.find(x => x.C === item.C);

			// If no such item is found, add the new item to the basket and return the updated list
			if (!selectedBet) return [...prevItems, selectedItem];

			// If an item is found but its selected status is different from the result, update that item in the basket
			if (selectedBet.selected !== result) return prevItems.map(x => (x.C === item.C ? selectedItem : x));

			// If the item is already in the basket and has the same selected status, remove it from the basket
			return prevItems.filter(x => x.C !== item.C);
		});
	};

	const totalO = basketItems.reduce((total, item) => total * item.O, 1);

	return <CaseContext.Provider value={{ bets, basketItems, addAndRemoveBasket, totalO }}>{children}</CaseContext.Provider>;
};
