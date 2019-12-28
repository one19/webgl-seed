import Renderer from './renderer';

const node = document.getElementById('game') as HTMLCanvasElement;

// 🏎️ Create rendering engine
let renderer = new Renderer(node);
console.log('rendnndndn', renderer, Object.keys(renderer), typeof renderer)

// 🏁 Start your engine
renderer.start(); // don't try to access nonexistent methods, kids