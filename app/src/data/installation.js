const installation = {
	name: "Installation",
	contents: [
		{
			component: "copy",
			value: `<code class="language-markup">alert("hi")</code> Lorem ipsum <code class='language-markup'>dolor</code> sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <code class="language-markup">alert("hi")</code> Lorem ipsum <code class='language-markup'>dolor</code> sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
		},
		{
			component: "code",
			value: {
				source: "install.sh",
				isCommand: true,
			},
		},
	],
};

export default installation;
