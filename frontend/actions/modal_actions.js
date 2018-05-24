export const OPEN = 'OPEN';
export const CLOSE = 'CLOSE';

export const closeModal = () => {
  return {
    type: CLOSE,
    component: null
  };
};

// TODO: change modal to component: modal?

export const openModal = (modal) => {
  return {
    type: OPEN,
    modal
  };
};
