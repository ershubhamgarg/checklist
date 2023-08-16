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
      console.log('newListItems', list, newListItems);
      return {...list, items: newListItems};
    } else {
      return list;
    }
  });
};
