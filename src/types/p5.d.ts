type ColorFunction = {
	(r: number, g: number, b: number): void;
	(rgb: number): void;
};

export type P5 = {
	draw: () => void;
	setup: () => void;
	width: number;
	height: number;
	frameCount: number;
	frameRate: (frames: number) => void;
	createCanvas: (x: number, y: number) => void;
	fill: ColorFunction;
	rect: (x: number, y: number, width: number, height: number) => void;
	circle: (x: number, y: number, r: number) => void;
	noise: (_: number) => number;
	push: () => void;
	translate: (x: number, y: number) => void;
	rotate: (degrees: number) => void;
	stroke: ColorFunction;
	ellipse: (cx: number, xAxis: number, cy: number, yAxis: number) => void;
	line: (ax: number, bx: number, ay: number, by: number) => void;
	pop: () => void;
	square: (x: number, y: number, side: number) => void;
  bezier: (...points: number[]) => void
};
