module.exports = (options = {}) => {
  return async (context) => {
    console.log("=================>", context.method);
    return context;
  };
};
