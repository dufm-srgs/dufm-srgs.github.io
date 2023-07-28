import Nico from "./images/testimonials/nico.webp";
import Chase from "./images/testimonials/chase.webp";
import Vishu from "./images/testimonials/vishu.webp";
import Jack from "./images/testimonials/jack.webp";
import Aaron from "./images/testimonials/aaron.webp";
import Violet from "./images/testimonials/violet.webp";
import Taran from "./images/testimonials/taran.webp";
import Lisa from "./images/testimonials/lisa.webp";
import Daniel from "./images/testimonials/daniel.webp";
import Tristan from "./images/testimonials/tristan.webp";
import James from "./images/testimonials/james.webp";

interface Testimonial {
	author: string;
	quote: string;
	image?: string;
	title?: string;
}

export const testimonials: Testimonial[] = [
	{
		author: 'Vishu S.',
		quote:
			"This class has been challenging, but in a good way. I've learnt a lot of math and worked with a bunch of really smart people, and I'm very thankful for that.",
		image: Vishu,
	},
	{
		author: 'Jack C.',
		quote:
			'My episodes in this class have made my friends genuinely question my sanity and moral standing.',
		image: Jack,
	},
	{
		author: 'Aaron K.',
		quote: 'Math is fun :)',
		image: Aaron,
	},
	{
		author: 'Chase L.',
		quote: 'Now I am become math, the destroyer of brains.',
		title: 'Class President',
		image: Chase,
	},
	{
		author: 'Lisa H.',
		quote: 'My brain been cooked longer than the potatoes at breakfast bc oh lawd is it BURNT.',
		image: Lisa,
	},
	{
		author: 'Tristan F.',
		quote:
			'Completing problems in this course has been way more fun than a normal mathematics course.',
		title: 'Webmaster',
		image: Tristan,
	},
	{
		author: "Daniel O.",
		quote: 'In no other class can you learn so much while not knowing any of the material at all.',
		image: Daniel,
	},
	{
		author: "Taran S.",
		quote: 'This class made me love math. I love math',
		image: Taran,
	},
	{
		author: "Nico G.",
		quote: 'I’ve grown my brain but lost my mind.',
		image: Nico,
	},
	{
		author: "Violet W.",
		quote: 'Some of us have taken Calculus BC, some of us have only just finished precalc, but we all suffer together.',
		image: Violet,
	},
	{
		author: 'James S.',
		quote: 'This class has shown me new realms of the subject I love.',
		image: James,
	}
];
