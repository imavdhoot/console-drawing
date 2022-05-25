`use strict`

import constants from './constants'
import verify from './verify'
import canvas from './canvas'

function processCmd (ipData: string) {
	const data = ipData.split(' ')
	console.log('command data: ', data)
	if (!data || !data[0] || !data[0].toUpperCase()) {
		throw new Error(constants.ERRORS.INVALID_CMD)
	}

	const command = data[0].toUpperCase()
	let error
	switch(command) {
	case constants.COMMAND.QUIT:
		process.exit()

	case constants.COMMAND.CANVAS:
		error = verify.verifyCanvas(data)
		if (error) return error
		return canvas.create(data)

	case constants.COMMAND.LINE:
		error = verify.verifyLine(data)
		if (error) return error
		return canvas.line(data)

	// case constants.COMMAND.RECTANGLE:
	// 	error = verify.verifyRectangle(data)
	// 	if (error) return error
	// 	return processRectangle(data)	

	// case constants.COMMAND.BUCKETFILL:
	// 	error = verify.verifyBucketFill(data)
	// 	if (error) return error
	// 	return processBucketFill(data)			
	default:
		throw new Error(constants.ERRORS.INVALID_CMD)
	}
}



export default processCmd