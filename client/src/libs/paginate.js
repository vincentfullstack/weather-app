export function paginate(items, page, pageSize) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return {
    pageItems: items.slice(start, end),
    totalPages: Math.ceil(items.length / pageSize),
  };
}
