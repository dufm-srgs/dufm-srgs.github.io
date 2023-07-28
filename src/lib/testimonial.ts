interface Testimonial {
	author: string;
	quote: string;
	title?: string;
}

export const testimonials: Testimonial[] = [
	{
		author: 'Vishu S.',
		quote:
			"This class has been challenging, but in a good way. I've learnt a lot of math and worked with a bunch of really smart people, and I'm very thankful for that"
	},
	{
		author: 'Jack C.',
		quote:
			'My episodes in this class have made my friends genuinely question my sanity and moral standing'
	},
	{
		author: 'Aaron K.',
		quote: 'Math is fun :)'
	},
	{
		author: 'Chase L.',
		quote: 'Now I am become math, the destroyer of brains.',
		title: 'Class President',
	},
	{
		author: 'Lisa H.',
		quote: 'My brain been cooked longer than the potatoes at breakfast bc oh lawd is it BURNT'
	},
	{
		author: 'Tristan F.',
		quote:
			'Completing problems in this course has been way more fun than a normal mathematics course.',
		title: 'Webmaster',
	},
	{
		author: "Daniel O.",
		quote: 'In no other class can you learn so much while not knowing any of the material at all'
	},
	{
		author: "Taran S.",
		quote: 'This class made me love math. I love math',
	},
	{
		author: "Nico G.",
		quote: 'I’ve grown my brain but lost my mind.'
	},
	{
		author: "Violet W.",
		quote: 'Some of us have taken calculus bc, some of us have only just finished precalc, but we all suffer together.'
	}
];
