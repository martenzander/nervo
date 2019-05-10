const packageInfo = require("./../package.json");
const AdmZip = require("adm-zip");
const path = require("path");

const zip = new AdmZip();

zip.addLocalFile(path.resolve(__dirname, "../", "build", "nervo.js"));
zip.addLocalFile(path.resolve(__dirname, "../", "build", "nervo.min.js"));
zip.writeZip(
	path.resolve(
		__dirname,
		"../",
		"app",
		"public",
		"downloads",
		`nervo_v${packageInfo.version}.zip`
	)
);
