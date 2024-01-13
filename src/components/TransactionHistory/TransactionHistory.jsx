import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
            <thead>
                <tr className={css.thead}>
                    <th className={css.titem}>Type</th>
                    <th className={css.titem}>Amount</th>
                    <th className={css.titem}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(({id, type, amount, currency}) => (
                        <tr className={css.tbody} key={id}>
                            <td className={css.tbitem}>{type}</td>
                            <td className={css.tbitem}>{amount}</td>
                            <td className={css.tbitem}>{currency}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table >
    );
};

