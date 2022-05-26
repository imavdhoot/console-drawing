"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
`use strict`;
const constants_1 = __importDefault(require("./constants"));
const verify_1 = __importDefault(require("./verify"));
const canvas_1 = __importDefault(require("./canvas"));
function processCmd(ipData) {
    const data = ipData.split(' ');
    console.log('command data: ', data);
    if (!data || !data[0] || !data[0].toUpperCase()) {
        throw new Error(constants_1.default.ERRORS.INVALID_CMD);
    }
    const command = data[0].toUpperCase();
    let error, canvasHt, canvasWd;
    switch (command) {
        case constants_1.default.COMMAND.QUIT:
            console.log(constants_1.default.MESSAGE.QUIT);
            process.exit();
        case constants_1.default.COMMAND.CANVAS:
            error = verify_1.default.verifyCanvas(data);
            if (error)
                throw error;
            canvas_1.default.create(data);
            return;
        case constants_1.default.COMMAND.LINE:
            error = verify_1.default.verifyLine(data);
            if (error)
                throw error;
            data[0] = 'render';
            return canvas_1.default.line(data);
        case constants_1.default.COMMAND.RECTANGLE:
            error = verify_1.default.verifyRectangle(data);
            if (error)
                return error;
            return canvas_1.default.rectangle(data);
        case constants_1.default.COMMAND.BUCKETFILL:
            error = verify_1.default.verifyBucketFill(data);
            if (error)
                return error;
            return canvas_1.default.bucketFill(data);
        default:
            throw new Error(constants_1.default.ERRORS.INVALID_CMD);
    }
}
exports.default = processCmd;
