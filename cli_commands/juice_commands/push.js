module.exports = {
	command: 'push',
	desc: 'uploads local content to remote without first pulling',
	builder: (yargs) => {
		return yargs
			.usage('enduro juice push')
	},
	handler: function (cli_arguments) {
		const enduro_instance = require('../../index')

		enduro_instance.init()
			.then(() => {
				enduro.flags = cli_arguments

				const juicebox = require(enduro.enduro_path + '/libs/juicebox/juicebox')

				return juicebox.push()
			})
	}
}
