import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'typesafe-actions';
import { ITransItem } from '../../../models/trans';
import { AppState } from '../../../redux/reducer';
import { mockData } from '../../../configs/mockData';
import TransactionsListForm from '../components/TransactionsListForm';
import { setTransData, setTransInitialData } from '../redux/transReducer';
import Pagination from '../components/Pagination';

const TransactionsListPage = () => {
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
  const data = useSelector((state: AppState) => state.trans.initialItem);
  const [dataTrans, setDataTrans] = useState<ITransItem[]>();
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    currentItem: 0,
    itemPerPage: 10,
    totalItem: mockData.length,
  });

  const handleChangePage = (number: number) => {
    if (dataTrans) {
      if (number === 0 || number === Math.ceil(pageInfo.totalItem / 10) + 1) return;
      setPageInfo((prev) => {
        return { ...prev, page: number, currentItem: number * pageInfo.itemPerPage - 10 };
      });
    }
  };

  React.useEffect(() => {
    dispatch(setTransData(mockData));
    dispatch(setTransInitialData(mockData));
  }, [dispatch]);

  React.useEffect(() => {
    if (data) {
      setDataTrans(data.slice(pageInfo.currentItem, pageInfo.page * pageInfo.itemPerPage));
    }
  }, [data, pageInfo]);

  React.useEffect(() => {
    if (data) {
      setPageInfo({ page: 1, currentItem: 0, itemPerPage: 10, totalItem: data.length });
    }
  }, [data]);
  return (
    <div>
      {dataTrans && <TransactionsListForm data={dataTrans} />}
      {dataTrans && (
        <Pagination
          currentPage={+pageInfo.page}
          totalPage={+(pageInfo.totalItem / pageInfo.itemPerPage)}
          itemPerPage={+pageInfo.itemPerPage}
          handleChangePage={handleChangePage}
        />
      )}
    </div>
  );
};

export default TransactionsListPage;
