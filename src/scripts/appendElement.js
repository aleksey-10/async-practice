const appendEl = (tagName, element) => {
  const inner = document.createElement(tagName);

  element.append(inner);

  return inner;
};

export { appendEl };
