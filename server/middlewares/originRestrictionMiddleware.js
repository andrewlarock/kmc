const allowedOrigins = ['https://kickmycourse.com', 'https://bespoke-kataifi-e2f4d5.netlify.app'];

const originRestrictionMiddleware = (req, res, next) => {
  const origin = req.headers['origin'];
  const referer = req.headers['referer']; 

  // If neither the origin nor referer is from the allowed frontend, block the request
  if (!allowedOrigins.includes(origin) && !allowedOrigins.some((allowedOrigin) => referer?.startsWith(allowedOrigin))) {
    return res.status(403).json({ message: 'Access denied. Public API access is blocked.' });
  }

  // If the request passes the check, allow it to continue to the next middleware or endpoint
  next();
};

module.exports = originRestrictionMiddleware;