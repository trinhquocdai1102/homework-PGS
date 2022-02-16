import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { IListItem } from '../../../models/list';
import { AppState } from '../../../redux/reducer';
import Items from './Items';

interface Props {
  isLoading: boolean;
  errorMessage: string;
  itemList?: IListItem[];
  onConfirm(): void;
  onReset(): void;
}

const ListItemForm = (props: Props) => {
  const listItem = useSelector((state: AppState) => state.list.list);
  const { onConfirm, onReset } = props;

  return (
    <>
      <title>
        <FormattedMessage id="listItem" />
      </title>
      <div className="submitItemBtn container">
        <button className="btn btnConfirm" type="submit" onClick={onConfirm}>
          Confirm
        </button>
        <button className="btn btnReset" type="submit" onClick={onReset}>
          Reset
        </button>
      </div>
      <div>
        {listItem?.slice(0, 20).map((item) => {
          return <Items key={item.id} item={item} changeTitle={handleChangeTitle} />;
        })}
      </div>
    </>
  );
};

export default ListItemForm;
