export function asyncHandler(fn) {
  return async function (req, res, next) {
    try {
      await fn(req, res);
    } catch (error) {
      //   console.log(error);
      next(error);
    }
  };
}
