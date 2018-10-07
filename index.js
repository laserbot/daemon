// https://github.com/tahoe-lafs/zfec
// youtube-dl

const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function run(cmd) {
  const { stdout, stderr } = await exec(cmd);
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}

url = "https://www.youtube.com/watch?v=uwmeH6Rnj2E"
console.log("loading clip")
run(`youtube-dl -ci -o "%(title)s-%(id)s.%(ext)s" --write-info-json ${url}`);
