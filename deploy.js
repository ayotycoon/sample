

// get previous env
const path = require('path')
const { writeFileSync } = require('fs');
const { execSync } = require('child_process');


function init(commitMessage){
   
      const   cd = "cd " + (__dirname + ' && ')
    


        // run git add
    execSync(cd + 'git add .')
    // run commit

    execSync(cd +`git commit -m "${commitMessage}"`)
    execSync(cd +`git push -f origin master`)


}

module.exports.init = init;
