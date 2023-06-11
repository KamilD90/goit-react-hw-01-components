import PropTypes from 'prop-types';

const Transactions = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => {
          const { id, type, amount, currency } = transaction;
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{parseFloat(amount)}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Transactions;

Transactions.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
