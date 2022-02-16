import React, { useState } from 'react';
import logo from '../../../logo-420-x-108.png';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../redux/reducer';
import { Action } from 'redux';
import { fetchThunk } from '../../common/redux/thunk';
import { API_PATHS } from '../../../configs/api';
import { getErrorMessageResponse } from '../../../utils';
import ListItemForm from '../components/ListItemForm';
import { setListItemData } from '../redux/listReducer';

const ListItemPage = () => {
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
  const [loading, setLoading] = useState(false);
  const listItem = useSelector((state: AppState) => state.list.list);
  const [errorMessage, setErrorMessage] = useState('');
  const [templateListItem, setTemplateListItem] = useState(useSelector((state: AppState) => state.list.list));
  console.log('template', templateListItem);
  console.log('store', listItem);

  const fetchListItem = React.useCallback(async () => {
    setErrorMessage('');
    setLoading(true);

    const json = await dispatch(fetchThunk(API_PATHS.listItem, 'get'));

    setLoading(false);
    if (json) {
      //tam thoi cat 3
      dispatch(setListItemData(json.slice(0, 3)));
      return;
    }
    setErrorMessage(getErrorMessageResponse(json));
  }, [dispatch]);

  const onConfirm = () => {
    if (templateListItem) {
      setTemplateListItem(listItem);
    }
    // onConfirm();
  };

  const onReset = () => {
    if (templateListItem) {
      setTemplateListItem(listItem);
      dispatch(setListItemData(templateListItem));
    }
    // onReset();
  };

  React.useEffect(() => {
    fetchListItem();
  }, [fetchListItem]);

  return (
    <div
      className="container"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <img src={logo} alt="" style={{ maxWidth: '250px', margin: '32px' }} />

      {loading === false && (
        <ListItemForm
          itemList={templateListItem}
          isLoading={loading}
          errorMessage={errorMessage}
          onConfirm={onConfirm}
          onReset={onReset}
        />
      )}
    </div>
  );
};

export default ListItemPage;
