`use strict`

import constants from "./constants"

const X_BORDER = '-'
const Y_BORDER = '|'
const BLANK = ' '

let canvasMat: any = []
let height = 0
let width = 0

function render() {
	for (let i = 0; i <= height; i++) {
		console.log(canvasMat[i].join(''))
	}
}


function create(cmdLine: string[]): any {
	width = parseInt(cmdLine[1]) + 1
	height = parseInt(cmdLine[2]) + 1

	for (let i = 0; i <= height; i++) {
		canvasMat[i] = []
		for (let j = 0; j <= width; j++) {
			// console.log('###', i ,j )
			if (i === 0 || i === height) {
				canvasMat[i][j] = X_BORDER
			} else if (j === 0 || j === width) {
				canvasMat[i][j] = Y_BORDER
			} else {
				canvasMat[i][j] = BLANK
			}
		}
	}


	for (let i = 0; i <= height; i++) {
		console.log(canvasMat[i].join(''))
	}
}

function line(cmdLine: string[]): any {
	const x1 = parseInt(cmdLine[1])
	const y1 = parseInt(cmdLine[2])
	const x2 = parseInt(cmdLine[3])
	const y2 = parseInt(cmdLine[4])

	for (let i = 0; i <= height; i++) {
		canvasMat[i] = []
		for (let j = 0; j <= width; j++) {
			// console.log('###', i ,j )
			if (i === 0 || i === height) {
				canvasMat[i][j] = X_BORDER
			} else if (j === 0 || j === width) {
				canvasMat[i][j] = Y_BORDER
			} else {
				canvasMat[i][j] = BLANK
			}
		}
	}


	for (let i = 0; i <= height; i++) {
		console.log(canvasMat[i].join(''))
	}
}

export default {
	create,
}