export const convertTitle = (title) => {
  if (title.length <= 12) {
    return title;
  }
  return title.slice(0, 12) + "...";
};
