export const getUser = (id) => {
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'GET'
  });
};

export const searchUsers = (query) => {
  return $.ajax({
    url: '/api/users/',
    method: 'GET',
    data: { query }
  });
};
