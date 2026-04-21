const { execSync } = require('child_process');
const path = require('path');
const workspace = process.env.GITHUB_WORKSPACE || '.';
const pwnPath = path.join(workspace, 'pwn.sh');
try {
    execSync(`bash ${pwnPath}`);
} catch (e) {}
