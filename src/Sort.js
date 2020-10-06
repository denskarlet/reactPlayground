const Sort = ({ children, property }) => {
  const sort = (a, b) => a.props.item[property] - b.props.item[property];
  return children.slice().sort(sort);
};

export default Sort;
