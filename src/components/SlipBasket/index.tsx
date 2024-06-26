import React, { useState } from 'react';
import useAppContext from '../../hooks/useAppContext';

const SlipBasket = () => {
	const { basketItems, totalO } = useAppContext();
	const [isBasketExpanded, setIsBasketExpanded] = useState(true);

	return (
		<div className="basket-wrapper">
			<div className="basket-title-wrapper">
				<div className="basket-title">Toplam Oynanan: {basketItems?.length}</div>
				<div onClick={() => setIsBasketExpanded(prev => !prev)}>{isBasketExpanded ? 'Aç' : 'Kapat'}</div>
			</div>

			<div className="basket-items-wrapper" data-status={isBasketExpanded ? 'open' : ''}>
				{basketItems.map(item => (
					<div className="basket-item" key={item.C}>
						<div>
							<b>Kod:</b> {item.C} <b>Maç:</b> {item.N} <b>Oran:</b> {item.O}
						</div>
						<hr />
					</div>
				))}
			</div>

			<hr />

			{basketItems?.length > 0 && <div className="total-basket"> Toplam Tutar: {totalO?.toFixed(2)} </div>}
		</div>
	);
};

export default SlipBasket;
