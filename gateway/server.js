const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Gateway health
app.get('/see', (req, res) => {
  res.json({ message: 'Gateway Running!' });
});

// Forward auth requests to auth service
app.use(
  '/auth',
  createProxyMiddleware({
    target: 'http://auth:4000', // "auth" = service name in docker-compose
    changeOrigin: true,
    pathRewrite: { '^/auth': '/api/auth' } // /auth/signup → /api/auth/signup
  })
);

const PORT = 3000;
app.listen(PORT, () => console.log(`Gateway running on port ${PORT}`));
