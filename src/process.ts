`use strict`

import constants from './constants'
import verify from './verify'
import canvas from './canvas'

function processCmd (ipData: string) {
	const data = ipData.split(' ')
	// console.log('command data: ', data)

	if (!data || !data[0] || !data[0].toUpperCase()) {
		throw new Error(constants.ERRORS.INVALID_CMD)
	}

	const command = data[0].toUpperCase()
	let error
	switch(command) {
	case constants.COMMAND.QUIT:
		console.log(constants.MESSAGE.QUIT)
		process.exit()
		break;

	case constants.COMMAND.CANVAS:
		error = verify.verifyCanvas(data)
		if (error) throw error

		canvas.create(data)
		return

	case constants.COMMAND.LINE:
		error = verify.verifyLine(data)
		if (error) throw error

		data[0] = 'render'
		return canvas.line(data)

	case constants.COMMAND.RECTANGLE:
		error = verify.verifyRectangle(data)
		if (error) throw error

		return canvas.rectangle(data)	

	case constants.COMMAND.BUCKETFILL:
		error = verify.verifyBucketFill(data)
		if (error) throw error

		return canvas.bucketFill(data)			
	default:
		throw new Error(constants.ERRORS.INVALID_CMD)
	}
}



export default processCmd