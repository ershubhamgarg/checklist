export const saveItemToListHelper = (payload, myList) => {
  let listId = payload.listId;
  myList.map((list, index) => {
    if (list.id == listId) {
      return {...list, items: list.items.push(payload)};
    } else {
      return list;
    }
  });
  return myList;
};
