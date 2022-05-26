`use strict`

import inquirer from "inquirer"
import constants from "./constants"
import processCommand from "./process"


function main() {
  inquirer.prompt([constants.QUESTION])
  .then(ans => {

    // handler to process input from console
    processCommand(ans.cmd)

  }).catch(exp => {

    console.log('Error::', exp.message)

  }).finally(()=> {

    // re-calling the execution for next input
    main()

  })

}

main();