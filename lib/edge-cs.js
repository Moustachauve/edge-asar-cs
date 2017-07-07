var path = require('path');

exports.getCompiler = function () {
	const coreclr = path.join(__dirname, 'edge-cs-coreclr', 'edge-cs-coreclr.dll').replace('.asar', '.asar.unpacked');
	const edge = path.join(__dirname, 'edge-cs.dll').replace('.asar', '.asar.unpacked');

	return process.env.EDGE_CS_NATIVE || (process.env.EDGE_USE_CORECLR ? coreclr : edge);
};

exports.getBootstrapDependencyManifest = function() {
	return path.join(__dirname, 'bootstrap', 'bin', 'Release', 'netstandard1.6', 'bootstrap.deps.json');
}
