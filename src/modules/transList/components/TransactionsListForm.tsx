import React from 'react';
import { BsChevronCompactDown } from 'react-icons/bs';
import { ITransItem } from '../../../models/trans';
import FilterForm from '../../transList/components/FilterForm';
import TransItem from '../components/TransItem';

interface Props {
  data: ITransItem[];
}

const TransactionsListForm = (props: Props) => {
  const { data } = props;
  return (
    <div className="trans-list-page">
      <div className="trans-title">
        <h2>Payroll Transactions List</h2>
        <button type="button" className="btn btn-primary">
          Export CSV <BsChevronCompactDown />
        </button>
      </div>
      <FilterForm />
      <table style={{ width: '100%', margin: '40px 0 0', borderSpacing: ' 0 16px', borderCollapse: 'separate' }}>
        <thead>
          <tr className="trans-table-header">
            <th>Status</th>
            <th>Date</th>
            <th style={{ width: '200px' }}>Funding Method</th>
            <th style={{ width: '200px' }}>Payroll Currency</th>
            <th>Total</th>
            <th>Order #</th>
            <th style={{ width: '200px' }}></th>
            <th style={{ width: '60px' }}></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return <TransItem key={index} item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(TransactionsListForm);
