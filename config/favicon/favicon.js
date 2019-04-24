const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const configuration = require("./favicon.config.js");

const favicons = require("favicons");
const source = "app/src/favicon/favicon.png";
const callback = function(error, response) {
	if (error) {
		console.log(error.message);
		return;
	}
	let html = "";

	response.files.forEach(file => {
		const name = file.name;
		const data = file.contents;
		fs.writeFile(`./app/dist/favicons/${name}`, data, err => {
			if (err) {
				return console.log(err);
			}

			return null;
		});
	});

	response.html.forEach(tag => {
		html += tag;
	});
	const dom = new JSDOM(html);
	const document = dom.window.document;
	const links = document.querySelectorAll("link");
	links.forEach(link => {
		const href = link.getAttribute("href");
		link.setAttribute("href", `./favicons${href}`);
	});
	let fileContent = dom.serialize();
	fileContent = fileContent.replace(/<(\/)?(html|head|body)>/gu, "");
	fileContent = fileContent.replace(/></gu, ">\r\n<");

	fs.writeFile("./app/src/hbs/favicons.hbs", fileContent, err => {
		if (err) {
			return console.log(err);
		}
		return null;
	});

	response.images.forEach(image => {
		const name = image.name;
		const data = image.contents;

		fs.writeFile(`./app/dist/favicons/${name}`, data, err => {
			if (err) {
				return console.log(err);
			}
			return null;
		});
	});
};

favicons(source, configuration, callback);
