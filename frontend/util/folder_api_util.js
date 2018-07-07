export const newFolder = (folder) => {
  return $.ajax({
    url: 'api/folders',
    method: 'POST',
    data: folder
  });
};

export const getFolder = (id) => {
  return $.ajax({
    url: `api/folders/${id}`,
    method: 'GET'
  });
};

export const updateFolder = (id, folder) => {
  return $.ajax({
    url: `api/folders/${id}`,
    method: 'PATCH',
    data: folder
  });
};

export const destroyFolder = (id) => {
  return $.ajax({
    url: `api/folders/${id}`,
    method: 'DELETE'
  });
};
