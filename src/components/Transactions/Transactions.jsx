import PropTypes from 'prop-types';
import css from './transactions.module.css';

const Transactions = ({ transactions }) => {
  return (
    <table className={css.transactions_history}>
      <thead className={css.table_head}>
        <tr>
          <th class={css.table_head_column}>Type</th>
          <th class={css.table_head_column}>Amount</th>
          <th class={css.table_head_column}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => {
          const { id, type, amount, currency } = transaction;
          const rowClass = index % 2 === 1 ? css.row_dark : '';
          return (
            <tr key={id} className={rowClass}>
              <td class={css.transaction_type}>{type}</td>
              <td class={css.transaction_amount}>{parseFloat(amount)}</td>
              <td class={css.transaction_currency}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Transactions;

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
