import React from 'react';
import moment from 'moment';
import { ITransItem } from '../../../models/trans';
import DeleteBtn from '../components/DeleteBtn';
import DetailBtn from '../components/DetailBtn';

interface Props {
  item: ITransItem;
}

const TransItem = (props: Props) => {
  const { item } = props;
  return (
    <tr key={item.payroll_id} className="trans-table-content">
      <td>{item.status}</td>
      <td>{moment(item.time_created).format('MM/DD/YYYY')}</td>
      <td>{item.payment_type}</td>
      {/* <td>3</td> */}
      <td>{item.currency} </td>
      <td>{(item.volume_input_in_input_currency + item.fees).toFixed(2)}</td>
      <td>{item.payroll_id}</td>
      <td style={{ textAlign: 'center' }}>
        <DetailBtn item={item} />
      </td>
      <td style={{ textAlign: 'center' }}>
        <DeleteBtn item={item} />
      </td>
    </tr>
  );
};

export default TransItem;
