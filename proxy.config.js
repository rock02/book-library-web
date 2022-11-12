const proxy = [
  {
    context: '/*',
    target: 'http://localhost:9090',
    secure: false
  }
];
module.exports = proxy;