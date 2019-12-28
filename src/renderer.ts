import * as glm from 'gl-matrix';

// ⚪ GL Singleton
var gl; // a linter worth a damn would throw here because unused

// this doesn't really need to be a class, unless performance reasons for storing
// the canvas elemnent as we're mutating it or something???
// let's find out
export default class Renderer {
  canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  start = () => {
    console.log(this.canvas);
  }
}