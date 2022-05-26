"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
`use strict`;
const inquirer_1 = __importDefault(require("inquirer"));
const constants_1 = __importDefault(require("./constants"));
const process_1 = __importDefault(require("./process"));
function main() {
    inquirer_1.default.prompt([constants_1.default.QUESTION])
        .then(ans => {
        // handler to process input from console
        (0, process_1.default)(ans.cmd);
    }).catch(exp => {
        console.log('Error::', exp.message);
    }).finally(() => {
        // re-calling the execution for next input
        main();
    });
}
main();
