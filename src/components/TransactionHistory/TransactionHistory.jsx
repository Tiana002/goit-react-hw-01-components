import PropTypes from 'prop-types';
import { Table, TableHead, TableBody, TableData } from './TransactionHistory.styled';
export const TransactionHistory = ({items}) => {
    return (
        <Table>
  <TableHead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </TableHead>

  <TableBody>
    {items.map(item => (
        <tr key={item.id}>
        <TableData>{item.type}</TableData>
        <TableData>{item.amount}</TableData>
        <TableData>{item.currency}</TableData>
      </tr>
    ))}
    
  </TableBody>
</Table>
    )
}

TransactionHistory.propTypes = {
items: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
).isRequired,
}