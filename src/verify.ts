`use strict`

import constants from './constants'
import canvas from './canvas'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function verifyCanvas(cmdLine: string[]): any {
	const width = parseInt(cmdLine[1])
	const height = parseInt(cmdLine[2])

	//validate all canvas co-ordinates are numbers
	if (isNaN(width) || isNaN(height)) {
		return new Error(constants.ERRORS.INVALID_CANVAS)
	}

	//validate all canvas co-ordinates are numbers
	if (width <= 0 || height <= 0) {
		return new Error(constants.ERRORS.INVALID_CANVAS)
	}	

	return
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function verifyLine(cmdLine: string[]): any {

	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const { width, height } = require('./canvas')

	if (!width || !height) {
		return new Error(constants.ERRORS.NO_CANVAS_EXIST)
	}

	const x1 = parseInt(cmdLine[1])
	const y1 = parseInt(cmdLine[2])
	const x2 = parseInt(cmdLine[3])
	const y2 = parseInt(cmdLine[4])

	//validate all co-ordinates are numbers
	if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
		return new Error(constants.ERRORS.INVALID_LINE)
	}

	//validate all co-ordinates are in canvas bound
	if (x1 <= 0 || x2 <= 0 || y1 <= 0 || y2 <= 0) {
		return new Error(constants.ERRORS.INVALID_LINE)
	}

	//validate all co-ordinates are in canvas bound
	if (x1 >= width || x2 >= width || y1 >= height || y2 >= height) {
		return new Error(constants.ERRORS.INVALID_LINE)
	}	

	return
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function verifyRectangle(cmdLine: string[]): any {

	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const { width, height } = require('./canvas')
	if (!width || !height) {
		return new Error(constants.ERRORS.NO_CANVAS_EXIST)
	}

	const x1 = parseInt(cmdLine[1])
	const y1 = parseInt(cmdLine[2])
	const x2 = parseInt(cmdLine[3])
	const y2 = parseInt(cmdLine[4])

	if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
		return new Error(constants.ERRORS.INVALID_RECTANGLE)
	}

	if (x1 <= 0 || x2 <= 0 || y1 <= 0 || y2 <= 0) {
		return new Error(constants.ERRORS.INVALID_RECTANGLE)
	}

	if (x1 >= width || x2 >= width || y1 >= height || y2 >= height) {
		return new Error(constants.ERRORS.INVALID_RECTANGLE)
	}

	//validate co-ordinates are not making flat rectangle
	if (x1 === x2 || y1 === y2) {
		return new Error(constants.ERRORS.FLAT_RECTANGLE)
	}

	return
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function verifyBucketFill(cmdLine: string[]): any {

	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const { width, height } = require('./canvas')
	if (!width || !height) {
		return new Error(constants.ERRORS.NO_CANVAS_EXIST)
	}

	const x1 = parseInt(cmdLine[1])
	const y1 = parseInt(cmdLine[2])
	const fillChar = cmdLine[3]

	if (isNaN(x1) || isNaN(y1)) {
		return new Error(constants.ERRORS.INVALID_FILL)
	}

	if (x1 <= 0 || y1 <= 0) {
		return new Error(constants.ERRORS.INVALID_FILL)
	}

	if (x1 >= width || y1 >= height) {
		return new Error(constants.ERRORS.INVALID_FILL)
	}

	//validate fill character is not draw character
	if (fillChar === constants.CANVAS_CHAR.POINT) {
		return new Error(constants.ERRORS.INVALID_FILL_CHAR)
	}

	return
}

export default {
	verifyCanvas,
	verifyLine,
	verifyRectangle,
	verifyBucketFill
}