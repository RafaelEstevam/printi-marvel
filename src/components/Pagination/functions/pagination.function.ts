export const generatePagination = (
  currentPage: number,
  total: number,
  limit: number,
  increment: number
) => {
  const totalPages = Math.ceil(total / limit) - 2;

  let startPage = currentPage;
  let endPage = totalPages;

  if (totalPages > 3) {
    startPage = Math.max(currentPage - Math.floor(increment / 2), 1);
    endPage = startPage + increment;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = endPage - increment;
    }
  }

  const pagination = [];

  for (let i = startPage; i <= endPage; i++) {
    pagination.push(i);
  }

  return pagination;
};

// const currentPage = 1;
// const totalItems = 25;
// const pageSize = 10;
// const increment = 10;

// const pagination = generatePagination(currentPage, totalItems, pageSize, increment);
// console.log(pagination);
