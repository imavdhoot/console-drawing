`use strict`

const constants = {
	QUESTION: {
		name: 'cmd',
		message: 'Enter command::'
	},
	ERRORS: {
		INVALID_CMD: 'invalid command',
		INVALID_CANVAS: 'invalid create canvas command',
		NO_CANVAS_EXIST: 'invalid command. please create canvas first',
		INVALID_LINE: 'invalid line command/co-ordinates',
		INVALID_LINE_LIMIT: 'invalid line co-ordinates. touching canvas border',
		INVALID_RECTANGLE: 'invalid rectangle command/co-ordinates',
		FLAT_RECTANGLE: 'invalid rectangle co-ordinates. flat rectangle',
		INVALID_FILL: 'invalid bucket fill command/co-ordinates',
		INVALID_FILL_CHAR: 'invalid fill character. provide other character',
		INVALID_FILL_LOC: 'starting fill co-ordinates not empty'
	},
	COMMAND: {
		'CANVAS': 'C',
		'LINE': 'L',
		'RECTANGLE': 'R',
		'BUCKETFILL': 'B',
		'QUIT': 'Q'
	},
	MESSAGE: {
		QUIT: '###### thank you ###### \n'
	},
	CANVAS_CHAR: {
		X_BORDER: '-',
		Y_BORDER: '|',
		BLANK: ' ',
		POINT: 'x',
	}
}

export default constants
