export const limitTitle = (title) => {
  return [...title.slice(0, 30), "..."];
};

export const limitDescription = (description) => {
  return [...description.slice(0, 80), "..."];
};
