import Renderer from './renderer';

// this could also be wrapped inside the engine, if we don't expect this
// canvas to ever be instantiated more than once??
const canvasNode = document.getElementById('game') as HTMLCanvasElement;

const renderer = new Renderer(canvasNode);

renderer.start(); // or whatever