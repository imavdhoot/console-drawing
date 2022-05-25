`use strict`

const constants = {
	QUESTION: {
		name: 'cmd',
		message: 'Enter command::'
	},
	ERRORS: {
		INVALID_CMD: 'invalid command',
		INVALID_CANVAS: 'invalid create canvas command',
		INVALID_LINE: 'invalid line command/co-ordinates'
	},
	COMMAND: {
		'CANVAS': 'C',
		'LINE': 'L',
		'RECTANGLE': 'R',
		'BUCKETFILL': 'B',
		'QUIT': 'Q'
	}
}

export default constants
