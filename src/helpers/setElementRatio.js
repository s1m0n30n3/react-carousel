export const setElementRatio = ({ target = {}, callback, ratio }) => {
  const [width, height] = ratio;
  const { contentRect } = target;
  return callback((contentRect.width / width) * height);
};
