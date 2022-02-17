import React from 'react';
import { FormattedMessage } from 'react-intl';
import { IListItem } from '../../../models/list';
import Items from './Items';

interface Props {
  isLoading: boolean;
  errorMessage: string;
  listItem?: IListItem[];
  // handleChangeTitle(id: number, value: string): void;
}

const ListItemForm = (props: Props) => {
  const { listItem } = props;

  return (
    <>
      <title>
        <FormattedMessage id="listItem" />
      </title>
      <div>
        {listItem?.map((item) => {
          return <Items key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default ListItemForm;
