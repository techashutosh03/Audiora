const validateBody = (fields) => {
  return (req, res, next) => {
    for (const field of fields) {
      if (!req.body || req.body[field] === undefined || req.body[field] === '') {
        return res.status(400).json({ message: `Field '${field}' is required.` });
      }
    }
    next();
  };
};

module.exports = { validateBody };
