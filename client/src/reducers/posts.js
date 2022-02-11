/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return state;
    default:
      return state;
  }
};
