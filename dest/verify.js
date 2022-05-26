"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
`use strict`;
const constants_1 = __importDefault(require("./constants"));
const canvas_1 = __importDefault(require("./canvas"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function verifyCanvas(cmdLine) {
    const width = parseInt(cmdLine[1]);
    const height = parseInt(cmdLine[2]);
    //validate all canvas co-ordinates are numbers
    if (isNaN(width) || isNaN(height)) {
        return new Error(constants_1.default.ERRORS.INVALID_CANVAS);
    }
    //validate all canvas co-ordinates are numbers
    if (width <= 0 || height <= 0) {
        return new Error(constants_1.default.ERRORS.INVALID_CANVAS);
    }
    return;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function verifyLine(cmdLine) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { width, height } = require('./canvas');
    console.log('#####', canvas_1.default);
    if (!width || !height) {
        return new Error(constants_1.default.ERRORS.NO_CANVAS_EXIST);
    }
    const x1 = parseInt(cmdLine[1]);
    const y1 = parseInt(cmdLine[2]);
    const x2 = parseInt(cmdLine[3]);
    const y2 = parseInt(cmdLine[4]);
    //validate all co-ordinates are numbers
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        return new Error(constants_1.default.ERRORS.INVALID_LINE);
    }
    //validate all co-ordinates are in canvas bound
    if (x1 <= 0 || x2 <= 0 || y1 <= 0 || y2 <= 0) {
        return new Error(constants_1.default.ERRORS.INVALID_LINE);
    }
    //validate all co-ordinates are in canvas bound
    if (x1 >= width || x2 >= width || y1 >= height || y2 >= height) {
        return new Error(constants_1.default.ERRORS.INVALID_LINE);
    }
    return;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function verifyRectangle(cmdLine) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { width, height } = require('./canvas');
    if (!width || !height) {
        return new Error(constants_1.default.ERRORS.NO_CANVAS_EXIST);
    }
    const x1 = parseInt(cmdLine[1]);
    const y1 = parseInt(cmdLine[2]);
    const x2 = parseInt(cmdLine[3]);
    const y2 = parseInt(cmdLine[4]);
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        return new Error(constants_1.default.ERRORS.INVALID_RECTANGLE);
    }
    if (x1 <= 0 || x2 <= 0 || y1 <= 0 || y2 <= 0) {
        return new Error(constants_1.default.ERRORS.INVALID_RECTANGLE);
    }
    if (x1 >= width || x2 >= width || y1 >= height || y2 >= height) {
        return new Error(constants_1.default.ERRORS.INVALID_RECTANGLE);
    }
    //validate co-ordinates are not making flat rectangle
    if (x1 === x2 || y1 === y2) {
        return new Error(constants_1.default.ERRORS.FLAT_RECTANGLE);
    }
    return;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function verifyBucketFill(cmdLine) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { width, height } = require('./canvas');
    if (!width || !height) {
        return new Error(constants_1.default.ERRORS.NO_CANVAS_EXIST);
    }
    const x1 = parseInt(cmdLine[1]);
    const y1 = parseInt(cmdLine[2]);
    const fillChar = cmdLine[3];
    if (isNaN(x1) || isNaN(y1)) {
        return new Error(constants_1.default.ERRORS.INVALID_FILL);
    }
    if (x1 <= 0 || y1 <= 0) {
        return new Error(constants_1.default.ERRORS.INVALID_FILL);
    }
    if (x1 >= width || y1 >= height) {
        return new Error(constants_1.default.ERRORS.INVALID_FILL);
    }
    //validate fill character is not draw character
    if (fillChar === constants_1.default.CANVAS_CHAR.POINT) {
        return new Error(constants_1.default.ERRORS.INVALID_FILL_CHAR);
    }
    return;
}
exports.default = {
    verifyCanvas,
    verifyLine,
    verifyRectangle,
    verifyBucketFill
};
