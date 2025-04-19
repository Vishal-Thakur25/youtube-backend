// const asyncHandler = () => {};

/// *** USING PROMISE****

const asnycHandler = (promiseHandler) => {
  return (req, res, next) => {
    Promise.resolve(promiseHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// ***USING TRY CATCH***

// function levels
// 1. function asyncHandler = () => {}
// 2. function asyncHandler = (func) => {}
// 3. function asyncHandler = (func) => async () => {}

// const asnycHandler = (fn) => async () => {
//   try {
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
