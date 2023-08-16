export const deleteListHelper = (payload, myList) => {
  return myList.filter(e => e.listId != payload.listId);
};

export const saveItemToListHelper = (payload, myList) => {
  let listId = payload.listId;
  myList.map((list, index) => {
    if (list.listId == listId) {
      return {...list, items: list.items.push(payload)};
    } else {
      return list;
    }
  });
  return myList;
};

export const deleteItemFromListHelper = (payload, myList) => {
  return myList.map((list, index) => {
    if (list.listId === payload.listId) {
      let newListItems = list.items.filter(e => e.itemId !== payload.itemId);
      return {...list, items: newListItems};
    } else {
      return list;
    }
  });
};

export const checkUncheckItemHelper = (payload, myList) => {
  return myList.map((list, index) => {
    if (list.listId === payload.listId) {
      let newListItems = list.items.map(e => {
        if (e.itemId == payload.itemId) {
          return {...e, completed: !e.completed};
        } else {
          return e;
        }
      });
      return {...list, items: newListItems};
    } else {
      return list;
    }
  });
};
