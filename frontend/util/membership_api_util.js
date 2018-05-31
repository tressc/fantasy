export const newMembership = (membership) => {
  return $.ajax({
    url: '/api/memberships',
    method: 'POST',
    data: membership
  });
};

export const destroyMembership = (id) => {
  return $.ajax({
    url: `/api/memberships/${id}`,
    method: 'DELETE'
  });
};
