export function logger(req, res, next) {
  console.log(`${req.method}${req.originalUrl} by ${req.socket.remoteAddress}`)
  next();
}
