const Spring = require("./../js/Spring");

const installation = {
	name: "Spring",
	contents: [
		{
			component: "copy",
			value: `<code class="language-markup">alert("hi")</code> Lorem ipsum <code class='language-markup'>dolor</code> sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <code class="language-markup">alert("hi")</code> Lorem ipsum <code class='language-markup'>dolor</code> sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
		},
		{
			component: "canvas",
			value: Spring,
		},
	],
};

export default installation;
