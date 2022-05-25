`use strict`

import inquirer from "inquirer"
import constants from "./constants"
import processCommand from "./process"
import verifyCommand from "./verify"


function main() {
  inquirer.prompt([constants.QUESTION])
  .then(ans => {
    // handler to process input from console
    processCommand(ans.cmd)
    
    main()
  }).catch(exp => {
    console.log('>>>>> Exception::', exp)
    console.log(constants.ERRORS.INVALID_CMD)
  }).finally(()=> {
    main()
  })

}

main();