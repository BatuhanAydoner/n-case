import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import useAppContext from '../../hooks/useAppContext';

const SlipTable = () => {
	const { bets } = useAppContext();

	return (
		<div className="event-table-wrapper">
			<div className="table">
				<TableHeader betCount={bets?.length ?? 0} />
				<TableBody bets={bets} />
			</div>
		</div>
	);
};

export default SlipTable;
