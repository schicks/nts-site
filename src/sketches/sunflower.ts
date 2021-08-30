import type { P5 } from 'src/types/p5';

function sketch (p5: P5): void {

	p5.setup = function() {
		p5.frameRate(2);
		initializeFields();
		p5.createCanvas(800, 800);
	};

	p5.draw = function() {
		p5.fill(100, 150, 255);
		p5.rect(0, 0, p5.width, p5.height);
		p5.fill(80, 150, 80);
		p5.circle(400, 400, 700);
		p5.fill(0);
		p5.circle(400, 400, 150);
		const i = (p5.noise(0.02 * p5.frameCount) * p5.width) / 1.5;
		let x = 0;
		p5.push();
		p5.translate(p5.width / 2, p5.height / 2);
		while (x < 100) {
			p5.rotate(0.1 * i);
			p5.fill(5 * x, 2 * x, x);
			p5.stroke(0);
			p5.ellipse(x + 78, x + 24, 122, 50);
			x = x + 0.05;
			p5.fill(200, 200, 50);
			p5.line(x + 0, x + 0, 100, 100);
		}
		p5.pop();
		let x2 = 112;
		p5.push();
		p5.translate(p5.width / 2, p5.height / 2);
		while (x2 < 200) {
			p5.rotate(0.2 * i);
			p5.stroke(0);
			p5.fill(120, x2, 20);
			p5.square(x2 + 78, x2 + 24, 122);
			p5.bezier(x2 + 399, x2 + 147, 210, 93, x2 + 105, x2 + -36, x2 + 168, x2 - 100);
			x2 = x2 + 0.5;
		}
		p5.pop();
		let x3 = 285;
		p5.push();
		p5.translate(p5.width / 2, p5.height / 2);
		while (x3 < 335) {
			p5.rotate(0.2 * i);
			p5.fill(140, x2, 19);
			p5.circle(x3 + 22, x3 + -8, 81);
			x3 = x3 + 0.5;
		}
		p5.pop();
	};

	function initializeFields() {}
};

export default sketch;
