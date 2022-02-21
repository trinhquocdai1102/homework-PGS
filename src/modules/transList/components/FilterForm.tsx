import React from 'react';
import DateForm from '../../common/components/DateForm';
import ApplyClearButton from '../../common/components/ApplyClearButton';
import { filterTrans, filterTransData } from '../redux/transReducer';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../redux/reducer';
import { Action } from 'typesafe-actions';

const FilterForm = () => {
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
  const [filterValue, setFilterValue] = React.useState<filterTrans[]>([
    { type: 'status', value: '' },
    { type: 'payroll_id', value: '' },
    { type: 'time_created', value: '', payload: '' },
  ]);

  const filterByField = React.useCallback((data: filterTrans) => {
    setFilterValue((prev) => {
      const newValue = prev?.map((item) => {
        if (item.type === data.type) {
          item.value = data.value;
          item.payload = data.payload;
        }
        return item;
      });
      return newValue;
    });
  }, []);

  const clearFilter = React.useCallback(() => {
    setFilterValue((prev) => {
      return prev.map((item) => {
        return { ...item, value: '' };
      });
    });
  }, []);

  React.useEffect(() => {
    dispatch(filterTransData(filterValue));
  }, [filterValue, dispatch]);
  return (
    <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
      <ul className="trans-header">
        <li>
          <select
            name="status"
            id="status"
            form="statusForm"
            onChange={(e) => filterByField({ type: 'status', value: e.target.value })}
          >
            <option value={undefined}>Status</option>
            <option value="Fulfilled">Fulfilled</option>
            <option value="Processed">Processing</option>
            <option value="Received">Received</option>
            <option value="Pending">Pending</option>
            <option value="Canceled">Canceled</option>
          </select>
        </li>
        {/* <li>
          <Client />
        </li> */}
        <li className="date-form">
          <DateForm placeholder="From" />
        </li>
        <li className="date-form">
          <DateForm placeholder="To" />
        </li>
        <li>
          <input
            className="trans-header-item"
            type="text"
            placeholder="Order #"
            onChange={(e) => filterByField({ type: 'payroll_id', value: e.target.value })}
          />
        </li>
      </ul>
      <ApplyClearButton onClear={clearFilter} />
    </ul>
  );
};

export default FilterForm;
