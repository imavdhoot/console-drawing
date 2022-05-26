`use strict`

import constants from "./constants"


let canvasMat: any = []
let height = 0
let width = 0

function render() {
	// render canvas on console
	for (let y = 0; y <= height; y++) {
		console.log(canvasMat[y].join(''))
	}
}


function create(cmdLine: string[]) {
	width = parseInt(cmdLine[1]) + 1
	height = parseInt(cmdLine[2]) + 1

	for (let y = 0; y <= height; y++) {
		canvasMat[y] = []

		for (let x = 0; x <= width; x++) {
			if (y === 0 || y === height) {
				canvasMat[y][x] = constants.CANVAS_CHAR.X_BORDER
			} else if (x === 0 || x === width) {
				canvasMat[y][x] = constants.CANVAS_CHAR.Y_BORDER
			} else {
				canvasMat[y][x] = constants.CANVAS_CHAR.BLANK
			}
		}
	}

	render()
	module.exports.width = width
	module.exports.height = height
}

function line(cmdLine: string[]) {
	let x1 = parseInt(cmdLine[1])
	let y1 = parseInt(cmdLine[2])
	let x2 = parseInt(cmdLine[3])
	let y2 = parseInt(cmdLine[4])

	// handle vertical line i.e. infinity slope
	if (x1 === x2) {
		for (let y = 1; y < height; y++) {
			if (y1 > y2) {
				let temp = y1
				y1 = y2
				y2 = temp
			}
			if (y1 <= y && y <= y2) {
				canvasMat[y][x1] = constants.CANVAS_CHAR.POINT
			}
		}

	// handle horizontal line i.e. zero slope
	} else 	if (y1 === y2) {
		for (let x = 1; x < width; x++) {
			if (x1 > x2) {
				let temp = x1
				x1 = x2
				x2 = temp
			}
			if (x1 <= x && x <= x2) {
				canvasMat[y1][x] = constants.CANVAS_CHAR.POINT
			}
		}
	} else {
		const slope = (y2-y1)/(x2-x1)

		for (let y = 1; y < height; y++) {
			for (let x = 1; x < width; x++) {
				const thisSlope = (y-y1)/(x-x1)

				// constants.CANVAS_CHAR.point with line slope
				if (thisSlope === slope) {
					
					// constants.CANVAS_CHAR.point within bound of given line
					// positive slope line
					if (slope > 0 && (x1 <= x && y1 <= y) && (x <= x2 && y <= y2)) {
						canvasMat[y][x] = constants.CANVAS_CHAR.POINT

					// negative slope line
					} else if (slope <= 0 && (x1 <= x && y1 >= y) && (x <= x2 && y >= y2)) {
						canvasMat[y][x] = constants.CANVAS_CHAR.POINT
					}
				} 
			}
		}
	}

	if (cmdLine[0] === 'render')
		render()
}

function rectangle(cmdLine: string[]) {
	let x1 = parseInt(cmdLine[1])
	let y1 = parseInt(cmdLine[2])
	let x2 = parseInt(cmdLine[3])
	let y2 = parseInt(cmdLine[4])

	// lower right corner given first then swap
	if (x1 > x2 && y1 > y2) {
		let tempX = x1
		let tempY = y1
		x1 = x2
		y1 = y2
		x2 = tempX
		y2 = tempY
	}

	// calculating all corners
	const topLeft = { x: `${x1}`, y: `${y1}` }
	const topRight = { x:`${x2}`, y: `${y1}` }
	const lowerLeft = { x: `${x1}`, y: `${y2}` }
	const lowerRight = { x: `${x2}`, y: `${y2}` }

	// 4 sides of rectangle
	line(['0', topLeft.x, topLeft.y, topRight.x, topRight.y])
	line(['0', lowerLeft.x, lowerLeft.y, lowerRight.x, lowerRight.y])
	line(['0', topLeft.x, topLeft.y, lowerLeft.x, lowerLeft.y])
	line(['0', topRight.x, topRight.y, lowerRight.x, lowerRight.y])

	render()
}

function bucketFill(cmdLine: string[]) {
	let x = parseInt(cmdLine[1])
	let y = parseInt(cmdLine[2])
	const fillChar = cmdLine[3]

	if (canvasMat[y][x] === constants.CANVAS_CHAR.POINT) {
		console.log(constants.ERRORS.INVALID_FILL_LOC)
		return
	}

	bucketFillHelper(x, y, fillChar)
	render()
}

function bucketFillHelper(x: number, y: number, fillChar: string) {
	if (x <= 0 || y <= 0 || x >= width || y >= height) {
		return
	}

	if (canvasMat[y][x] !== constants.CANVAS_CHAR.BLANK) {
		return
	}	

	if (canvasMat[y][x] === constants.CANVAS_CHAR.POINT) {
		return
	}

	canvasMat[y][x] = fillChar
	bucketFillHelper(x-1, y-1, fillChar)
	bucketFillHelper(x-1, y, fillChar)
	bucketFillHelper(x-1, y+1, fillChar)
	bucketFillHelper(x, y-1, fillChar)
	bucketFillHelper(x, y+1, fillChar)
	bucketFillHelper(x+1, y-1, fillChar)
	bucketFillHelper(x+1, y, fillChar)
	bucketFillHelper(x+1, y+1, fillChar)
}

export default {
	create,
	line,
	rectangle,
	bucketFill
}