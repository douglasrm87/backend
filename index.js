const core = require('@actions/core');
const github = require('@actions/github');
 
try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('Douglas');
  console.log(`Em Index.js segue Deploy: ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`Mensagem de payload: ${payload}`);
} catch (error) {
  core.setFailed("Mensagem de erro em index.js: ",error.message);
}
