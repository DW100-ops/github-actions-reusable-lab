const greet = require('./index');
const result = greet('GitHub Actions');
if (result === 'Hello, GitHub Actions!') {
  console.log('Test Passed!');
} else {
  console.log('Test Failed!');
  process.exit(1);
}
