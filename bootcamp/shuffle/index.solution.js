const shuffle = arr => {
  const copy = Array.from(arr);
  const shuffled = [];
  arr.forEach(() =>
    shuffled.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]));
  return shuffled;
};
