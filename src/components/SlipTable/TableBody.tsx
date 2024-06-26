import React from 'react';
import { FixedSizeList as List } from 'react-window';
import useAppContext from '../../hooks/useAppContext';
import { IBet } from '../../models/general';
import { TITLE_ARRAY, RESULTS, RESULT_VALUES } from '../../constraints';

interface IProps {
	bets: IBet[];
}

const TableBody = ({ bets }: IProps) => {
	const { addAndRemoveBasket, basketItems } = useAppContext();

	const onAddAndRemoveBasket = (result: RESULT_VALUES, item: IBet, valueO: number) => {
		addAndRemoveBasket(result, item, valueO);
	};

	const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
		const item: IBet = bets[index];

		const result1 = item?.OCG['1']?.OC['0'];
		const resultX = item?.OCG['1']?.OC['1'];
		const result25 = item?.OCG['5']?.OC['25'];
		const result26 = item?.OCG['5']?.OC['26'];
		const result1X = item?.OCG['2']?.OC['3'];
		const result12 = item?.OCG['2']?.OC['4'];
		const resultX2 = item?.OCG['2']?.OC['5'];

		const selectedRatioCode: string | undefined = basketItems?.find((x: any) => x?.C === item?.C)?.selected;

		return (
			<div className="table-head" style={style}>
				<div className="table-wrapper">
					<div className="table-item">{`${item?.D} ${item?.LN}`}</div>

					{TITLE_ARRAY?.map((item, index) => (
						<div className="table-item-o" key={`${item?.title}-${index}`}>
							{item?.title}
						</div>
					))}
				</div>
				<div className="table-wrapper">
					<div className="table-item-o match-slip-info">{item?.N}</div>
					<div className="table-item-o match-slip-info"></div>
					<div className="table-item-o match-slip-info">{item?.OCG['1']?.MBS}</div>
					<div
						className="table-item-o match-slip-info"
						data-status={RESULTS.result1 === selectedRatioCode ? 'active' : ''}
						onClick={() => onAddAndRemoveBasket(RESULTS.result1, item, +result1?.O)}
						style={{ cursor: 'pointer' }}
					>
						{result1?.O}
					</div>
					<div
						className="table-item-o match-slip-info"
						data-status={RESULTS.resultX === selectedRatioCode ? 'active' : ''}
						onClick={() => onAddAndRemoveBasket(RESULTS.resultX, item, +resultX?.O)}
						style={{ cursor: 'pointer' }}
					>
						{resultX?.O}
					</div>
					<div className="table-item-o match-slip-info"></div>
					<div
						className="table-item-o match-slip-info"
						data-status={RESULTS.resultDown === selectedRatioCode ? 'active' : ''}
						onClick={() => onAddAndRemoveBasket(RESULTS.resultDown, item, +result25?.O)}
						style={{ cursor: 'pointer' }}
					>
						{result25?.O}
					</div>
					<div
						className="table-item-o match-slip-info"
						data-status={RESULTS.resultUp === selectedRatioCode ? 'active' : ''}
						onClick={() => onAddAndRemoveBasket(RESULTS.resultUp, item, +result26?.O)}
						style={{ cursor: 'pointer' }}
					>
						{result26?.O}
					</div>
					<div className="table-item-o match-slip-info"></div>
					<div className="table-item-o match-slip-info"></div>
					<div className="table-item-o match-slip-info"></div>
					<div className="table-item-o match-slip-info"></div>
					<div className="table-item-o match-slip-info"></div>
					<div
						className="table-item-o match-slip-info"
						data-status={RESULTS.result1X === selectedRatioCode ? 'active' : ''}
						onClick={() => onAddAndRemoveBasket(RESULTS.result1X, item, +result1X?.O)}
						style={{ cursor: 'pointer' }}
					>
						{result1X?.O}
					</div>
					<div
						className="table-item-o match-slip-info"
						data-status={RESULTS.result12 === selectedRatioCode ? 'active' : ''}
						onClick={() => onAddAndRemoveBasket(RESULTS.result12, item, +result12?.O)}
						style={{ cursor: 'pointer' }}
					>
						{result12?.O}
					</div>
					<div
						className="table-item-o match-slip-info"
						data-status={RESULTS.resultX2 === selectedRatioCode ? 'active' : ''}
						onClick={() => onAddAndRemoveBasket(RESULTS.resultX2, item, +resultX2?.O)}
						style={{ cursor: 'pointer' }}
					>
						{resultX2?.O}
					</div>
					<div className="table-item-o match-slip-info"></div>
					<div className="table-item-o match-slip-info"></div>
					<div className="table-item-o match-slip-info"></div>
				</div>
			</div>
		);
	};

	return (
		<List height={window.innerHeight} width={'100%'} itemSize={50} itemCount={bets.length}>
			{Row}
		</List>
	);
};

export default TableBody;
