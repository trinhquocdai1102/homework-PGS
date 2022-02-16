import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'typesafe-actions';
import { IListItem } from '../../../models/list';
import { AppState } from '../../../redux/reducer';
import { setItemValue } from '../redux/listReducer';

interface Props {
  item: IListItem;
  handleChangeTitle(id: number, value: string): void;
}

const Items = (prop: Props) => {
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
  const [isTag, setTag] = useState(true);
  const { id, title, thumbnailUrl } = prop.item;
  const [text, setText] = React.useState(title);

  const onBlur = React.useCallback(
    (text: string) => {
      dispatch(setItemValue({ id: +id, value: text }));
    },
    [dispatch, id],
  );

  React.useEffect(() => {
    setText(title);
  }, [title]);
  return (
    <div className="listItem">
      <div className="listItemImage">
        <img src={thumbnailUrl} alt="" />
      </div>
      <div className="listItemContent">
        {isTag ? (
          <h4 onClick={() => setTag(false)}>{text}</h4>
        ) : (
          <input
            autoFocus
            onBlur={(e) => {
              setTag(true);
              onBlur(e.target.value);
            }}
            type="text"
            value={text}
            className="form-control inputItemContent"
            onChange={(e) => setText(e.target.value)}
          />
        )}
        <p className="itemDate">{Date.now()}</p>
      </div>
    </div>
  );
};

export default Items;
