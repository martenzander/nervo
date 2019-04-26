const Spring = require("./../js/Spring");
import uuid from "uuid/v4";
export const key = `id-${uuid()}`;

const installation = {
	name: "Spring",
	key,
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
