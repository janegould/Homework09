var inquirer = require("inquirer");
var fs = require('fs');
//const axios = require("axios");


  //pass your questions in here
  inquirer.prompt([
    {
    message: "Enter your GitHub username:",
    name: "username"
    },
    {
      type: "input",
      message: "password",
      name: "password"
    },

      {
        type: "checkbox",
        message: "What languages do you know?",
        name: "stack",
        choices: [
          "HTML", 
          "CSS", 
          "JavaScript", 
          "MySQL"
        ]
      },
      {
        type: "list",
        message: "What is your preferred method of communication?",
        name: "contact",
        choices: [
          "email",
          "phone",
          "telekinesis"
        ]
      }

])
  .then(function(answers) {
    var filename = JSON.stringify(answers, null, '\t');
   const queryUrl = `https://api.github.com/users/${username}`;

   axios.get(queryUrl).then(function(res) {
      const repoNames = res.data.map(function(repo) {
        return repo.name;
      });
      const repoNamesStr = repoNames.join("\n");

      fs.writeFile("ReadMe1.md", filename, function(err) {
        if (err) {
          throw err;
        }
  

       // console.log(`Saved ${repoNames.length} repos`);
     // });
    });
    // Use user feedback for... whatever!!
  
  

//});
//init();


//.catch(error => {
 // if(error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  //} else {
    // Something else when wrong
  //}
//});

  })
});
