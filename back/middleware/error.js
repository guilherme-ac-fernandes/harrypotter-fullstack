/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
module.exports = (err, _req, res, _next) => {
  // console.log('erro:', err);

  if (err.code) {
    return res.status(err.code).json({ message: err.message });
  }

  console.error(err);
  return res.status(500).json({ message: 'Internal server error' });
};
