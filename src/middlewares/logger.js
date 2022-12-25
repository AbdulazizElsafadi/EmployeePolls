const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The Action:", action);
  const returnedValue = next(action);
  console.log("The New State:", store.getState());
  console.groupEnd();
  return returnedValue;
};

export default logger;
