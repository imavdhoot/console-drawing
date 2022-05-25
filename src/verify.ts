`use strict`

import constants from "./constants"

function verifyCanvas(cmdLine: string[]): any {
	const width = parseInt(cmdLine[1])
	const height = parseInt(cmdLine[2])

	if (isNaN(width) || isNaN(height)) {
		return new Error(constants.ERRORS.INVALID_CANVAS)
	}

	return
}


function verifyLine(cmdLine: string[]): any {
	const x1 = parseInt(cmdLine[1])
	const y1 = parseInt(cmdLine[2])
	const x2 = parseInt(cmdLine[3])
	const y2 = parseInt(cmdLine[4])

	if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
		return new Error(constants.ERRORS.INVALID_LINE)
	}

	if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
		return new Error(constants.ERRORS.INVALID_LINE)
	}

	return
}

export default {
	verifyCanvas,
	verifyLine,
	// verifyRectangle,
	// verifyBucketFill
}