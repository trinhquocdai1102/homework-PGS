import { ActionType, createCustomAction, getType } from 'typesafe-actions';
import { IListItem } from '../../../models/list';

export interface ListItemState {
  list?: IListItem[];
  pendingList?: IListItem[];
}

export const setListItemData = createCustomAction('list/setListItemData', (data: IListItem[]) => ({
  data,
}));

export const setPendingList = createCustomAction('list/setPendingList', (data: IListItem[]) => ({
  data,
}));

export const setItemValue = createCustomAction('list/setItemValue', (data: { id: number; value: string }) => ({
  data,
}));

const actions = { setListItemData, setPendingList, setItemValue };

type Action = ActionType<typeof actions>;

export default function reducer(state: ListItemState = {}, action: Action) {
  switch (action.type) {
    case getType(setListItemData):
      return { ...state, list: action.data };
    case getType(setPendingList):
      return { ...state, pendingList: action.data };
    // case getType(setItemValue): {
    //   const { value, id } = action.data;
    //   const newPendingList = state.list?.map((item) => {
    //     if (+item.id === +id) {
    //       item.title = value;
    //     }
    //     return item;
    //   });
    //   return { ...state, list: newPendingList };
    // }
    default:
      return state;
  }
}
