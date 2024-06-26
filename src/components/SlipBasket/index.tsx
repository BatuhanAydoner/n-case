import React from 'react';
import useAppContext from '../../hooks/useAppContext';

const SlipBasket = () => {
	const { basketItems, totalO } = useAppContext();

	return (
		<div className="basket-wrapper">
			<div className="basket-title-wrapper">
				<div className="basket-title">Toplam Oynanan: {basketItems?.length}</div>
			</div>

			<div className="basket-items-wrapper">
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
