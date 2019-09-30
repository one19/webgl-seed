import Renderer from './renderer';

const node = document.getElementById('game');

// 🏎️ Create rendering engine
let renderer = new Renderer(node);

// 🏁 Start your engine
renderer.start();