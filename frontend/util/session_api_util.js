export const logOut = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};
