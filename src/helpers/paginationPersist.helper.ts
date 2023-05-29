export const setPaginationOnStorage = (page: number, tableName: string) => {
  localStorage.setItem(tableName, page.toString());
};

export const getPaginationOnStorage = (tableName: string) => {
  const pageNumber = localStorage.getItem(tableName);
  if (pageNumber) {
    return parseInt(pageNumber, 10);
  }
  return 0;
};

export const removePaginationOnStorage = (tableName: string) => {
  localStorage.removeItem(tableName);
};
