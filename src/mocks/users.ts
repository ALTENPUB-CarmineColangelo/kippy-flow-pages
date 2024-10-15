/** @format */

export const ambram = {
  email: 'ambra.mema@alten.it',
  token: '9fef7c00-ebcd-4559-9519-ffa98ca16539',
};

export const gianniv = {
  email: 'giovanni.vincitorio.ext@alten.ch',
  token: '26dbf390-396d-4084-ad9d-37de6baec0bc',
};

const SELECTED_USER = gianniv;

export const getMockSelectedUserSearchParams = () => new URLSearchParams(SELECTED_USER).toString();
