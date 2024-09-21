function getPagination(page, size) {
  const limit = size;
  const offset = 0 === page ? 0 : (page - 1) * size;
  const lean = true;
  return { offset, limit, lean };
}

function formatOutput(result) {
  return {
    total: result.totalDocs,
    totalPages: result.totalPages,
    size: result.limit,
    currentPage: result.page,
    data: result.docs,
  };
}

module.exports = { getPagination, formatOutput };
