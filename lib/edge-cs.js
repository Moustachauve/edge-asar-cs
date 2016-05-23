var path = require('path');

exports.getCompiler = function () {
	const coreclr = path.join(__dirname, 'edge-cs-coreclr', 'edge-cs-coreclr.dll').replace('.asar', 'app.asar.unpacked');
	const edge = path.join(__dirname, 'edge-cs.dll').replace('.asar', 'app.asar.unpacked');
	
	return process.env.EDGE_CS_NATIVE || (process.env.EDGE_USE_CORECLR ? coreclr : edge);
};
