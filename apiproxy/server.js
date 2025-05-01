const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
var cors = require('cors');

const app = express();

// Proxy configuration
app.use('/v1', createProxyMiddleware({
  target: 'https://api.siliconflow.cn', // Change this to your target server
  onError: (err, req, res) => {
      res.status(500).send('Proxy error');
  },
  //pathRewrite: {'^/api': ''},
  changeOrigin: true,
}));

app.use(cors());

const PORT = 8800;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

