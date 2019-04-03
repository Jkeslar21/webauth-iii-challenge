const jwt = require('jsonwebtoken');

const secrets = require('../auth/secrets'); 

module.exports = (req, res, next) => {
  const token = req.headers.authorization; 

  if (token) {
    jwt.verify(token, secrets.jwtSecret, error => {
      if (error) {
        res.status(401).json({ message: 'Invalid Credentials' });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'Go Fish 🎣' });
  }
};