export const newPage = (page) => {
  return $.ajax({
    url: 'api/pages',
    method: 'POST',
    data: page
  });
};

export const getPage = (id) => {
  return $.ajax({
    url: `api/pages/${id}`,
    method: 'GET'
  });
};

export const updatePage = (id, page) => {
  return $.ajax({
    url: `api/pages/${id}`,
    method: 'PATCH',
    data: page
  });
};

export const destroyPage = (id) => {
  return $.ajax({
    url: `api/pages/${id}`,
    method: 'DELETE'
  });
};
