import processCmd from "./process";
import constants from './constants'
import { resetCanvas } from './canvas'

console.log = jest.fn()

function isCanvasMatch(width: number, height: number,
	actualCanvas: any[][], expectedCanvas: any[][]): boolean {

	width = width + 1;
	height = height + 1;
	for(let y = 0; y <= height; y++) {
		if (!actualCanvas[y] || !expectedCanvas[y]) {
			return false
		}

		for (let x = 0; x <= width; x++) {
			if (actualCanvas[y][x] !== expectedCanvas[y][x]) {
				return false
			}
		}
	}

	return true
}

describe("Test Canvas create", () => {

	it("should throw error for wrong canvas create cmd", () => {
		const cmd = ['C', 'a', 'b']

		try {
			processCmd(cmd.join(' '))
		} catch(exp: any){
			expect(exp.message).toBe(constants.ERRORS.INVALID_CANVAS);
		}
	});

	it("should throw error for flat canvas create cmd", () => {
		const cmd = ['C', '10', '0']

		try {
			processCmd(cmd.join(' '))
		} catch(exp: any){
			expect(exp.message).toBe(constants.ERRORS.FLAT_CANVAS);
		}
	});

	it("should create canvas of 10 * 4", () => {
		const cmd = ['C', '10', '4']
		processCmd(cmd.join(' '))

		const { canvasMat } = require('./canvas')
		const expCanvas = [
			['-','-','-','-','-','-','-','-','-','-','-','-'],
			['|', ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', '|'],
			['|', ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', '|'],
			['|', ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', '|'],
			['|', ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', '|'],
			['-','-','-','-','-','-','-','-','-','-','-','-'],
		]
		expect(isCanvasMatch(10, 4, canvasMat, expCanvas)).toBe(true);
	});


});


describe("Test Canvas Line", () => {
	beforeAll(() => {
		// reseting canvas before testcases
		resetCanvas()
	})

	it("should throw error for Line cmd before canvas creation", () => {
		const cmd = ['L', '1', '2', '6', '2']

		try {
			processCmd(cmd.join(' '))
		} catch(exp: any){
			expect(exp.message).toBe(constants.ERRORS.NO_CANVAS_EXIST)

			// creating canvas for next tests
			const cmd = ['C', '15', '4']
			processCmd(cmd.join(' '))			
		}
	});		

	it("should throw error for wrong Line cmd", () => {
		const cmd = ['l', 'a', 'b', '1', '2']

		try {
			processCmd(cmd.join(' '))
		} catch(exp: any){
			expect(exp.message).toBe(constants.ERRORS.INVALID_LINE);
		}
	});

	it("should throw error for Line outside canvas border", () => {
		const cmd = ['L', '-4', '0', '6', '3']

		try {
			processCmd(cmd.join(' '))
		} catch(exp: any){
			expect(exp.message).toBe(constants.ERRORS.INVALID_LINE_LIMIT);
		}
	});

	it("should draw horizontal line from P1(1,2) to P2(6,2)", () => {
		const cmd = ['L', '1', '2', '6', '2']
		processCmd(cmd.join(' '))

		const { canvasMat } = require('./canvas')
		const expCanvas = [
			['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
			['|', ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', '|'],
			['|', 'x','x','x','x','x','x',' ',' ',' ',' ',' ',' ',' ',' ',' ', '|'],
			['|', ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', '|'],
			['|', ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', '|'],
			['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
		]

		expect(isCanvasMatch(15, 4, canvasMat, expCanvas)).toBe(true);
	});

});

describe("Test Canvas Rectangle", () => {
	beforeAll(() => {
		// reseting canvas before testcases
		resetCanvas()
	})

	it("should throw error for Rectangle cmd before canvas creation", () => {
		const cmd = ['R', '1', '2', '6', '2']

		try {
			processCmd(cmd.join(' '))
		} catch(exp: any){		
			expect(exp.message).toBe(constants.ERRORS.NO_CANVAS_EXIST)

			// creating canvas for next tests
			const cmd = ['C', '15', '4']
			processCmd(cmd.join(' '))			
		}
	});		

	it("should throw error for wrong Rectangle cmd", () => {
		const cmd = ['R', 'a', 'b', '1', '2']

		try {
			processCmd(cmd.join(' '))
		} catch(exp: any){
			expect(exp.message).toBe(constants.ERRORS.INVALID_RECTANGLE);
		}
	});

	it("should throw error for Rectangle outside canvas border", () => {
		const cmd = ['R', '-4', '0', '6', '3']

		try {
			processCmd(cmd.join(' '))
		} catch(exp: any){
			expect(exp.message).toBe(constants.ERRORS.INVALID_RECTANGLE_LIMIT);
		}
	});

	it("should throw error for flat Rectangle", () => {
		const cmd = ['R', '8', '1', '12', '1']

		try {
			processCmd(cmd.join(' '))
		} catch(exp: any){
			expect(exp.message).toBe(constants.ERRORS.FLAT_RECTANGLE);
		}
	});	

	it("should draw Rectangle from Top Left(8,1) to Lower Right(12,3)", () => {
		const cmd = ['R', '8', '1', '12', '3']
		processCmd(cmd.join(' '))

		const { canvasMat } = require('./canvas')
		const expCanvas = [
			['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
			['|', ' ',' ',' ',' ',' ',' ',' ','x','x','x','x','x',' ',' ',' ', '|'],
			['|', ' ',' ',' ',' ',' ',' ',' ','x',' ',' ',' ','x',' ',' ',' ', '|'],
			['|', ' ',' ',' ',' ',' ',' ',' ','x','x','x','x','x',' ',' ',' ', '|'],
			['|', ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', '|'],
			['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
		]
		expect(isCanvasMatch(15, 4, canvasMat, expCanvas)).toBe(true);
	});

});


describe("Test Canvas Bucket Fill", () => {
	beforeAll(() => {
		// reseting canvas before testcases
		resetCanvas()
	})

	it("should throw error for Bucketfill cmd before canvas creation", () => {
		const cmd = ['B', '1', '2', 'o']

		try {
			processCmd(cmd.join(' '))
		} catch(exp: any){		
			expect(exp.message).toBe(constants.ERRORS.NO_CANVAS_EXIST)

			// creating canvas for next tests
			const cmd = ['C', '15', '4']
			processCmd(cmd.join(' '))
		}
	});		

	it("should throw error for wrong Bucketfill cmd", () => {
		const cmd = ['B', 'g', 'k', 'o']

		try {
			processCmd(cmd.join(' '))
		} catch(exp: any){
			expect(exp.message).toBe(constants.ERRORS.INVALID_FILL);
		}
	});

	it("should throw error for Bucketfill outside canvas border", () => {
		const cmd = ['B', '-4', '0', 'o']

		try {
			processCmd(cmd.join(' '))
		} catch(exp: any){
			expect(exp.message).toBe(constants.ERRORS.INVALID_FILL_LIMIT);
		}
	});

	it("should throw error for Bucketfill outside canvas border", () => {
		const cmd = ['B', '7', '1', 'x']

		try {
			processCmd(cmd.join(' '))
		} catch(exp: any){
			expect(exp.message).toBe(constants.ERRORS.INVALID_FILL_CHAR);
		}
	});	

	it("should draw Bucketfill from Top Left(8,1) to Lower Right(12,3)", () => {
		const cmd1 = ['L', '1', '2', '6', '2']
		processCmd(cmd1.join(' '))

		const cmd2 = ['R', '8', '1', '12', '3']
		processCmd(cmd2.join(' '))		

		const cmd = ['B', '7', '1', 'o']
		processCmd(cmd.join(' '))

		const { canvasMat } = require('./canvas')
		const expCanvas = [
			['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
			['|', 'o','o','o','o','o','o','o','x','x','x','x','x','o','o','o', '|'],
			['|', 'x','x','x','x','x','x','o','x',' ',' ',' ','x','o','o','o', '|'],
			['|', 'o','o','o','o','o','o','o','x','x','x','x','x','o','o','o', '|'],
			['|', 'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o', '|'],
			['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
		]
		
		expect(isCanvasMatch(15, 4, canvasMat, expCanvas)).toBe(true);
	});

});
