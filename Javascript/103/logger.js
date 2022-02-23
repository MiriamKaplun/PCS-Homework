module.exports = (req, res, next) => {
  const now = new Date();
  console.log(`${now.toLocaleDateString()} ${now.toLocaleTimeString()} - ${req.url}`);
  next();
}