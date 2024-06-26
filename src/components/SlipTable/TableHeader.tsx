import React from 'react';
import { TITLE_ARRAY } from '../../constraints';

interface IProps {
	betCount: number;
}

const TableHeader = ({ betCount }: IProps) => {
	return (
		<div className="table-wrapper" style={{ marginRight: '5px' }}>
			<div className="table-head-item">Event Count: {betCount}</div>

			{TITLE_ARRAY?.map((item: any, index) => (
				<div className="table-head-item" key={`${item?.title}-${index}`}>
					{item?.title}
				</div>
			))}
		</div>
	);
};

export default TableHeader;
