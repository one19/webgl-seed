import * as glm from 'gl-matrix';

const webglConfig = { alpha: true, premultipliedAlpha: false };

// this doesn't really need to be a class, unless performance reasons for storing
// the canvas elemnent as we're mutating it or something???
// let's find out
export default class Renderer {
  canvas: HTMLCanvasElement;
  gl: WebGL2RenderingContext;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.gl = canvas.getContext('webgl2', webglConfig) as WebGL2RenderingContext;
  }

  start = () => {
    // apparently these are good default settings?
    // too bad this trash can't be seen, so we have no idea what it's doing
    // imean sure, we can guess, but no detailed explanation or growth.
    this.gl.clearColor(0.0, 0.0, 0.0, 0.0);
    this.gl.colorMask(true, true, true, true);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.depthFunc(this.gl.LEQUAL);
    this.gl.cullFace(this.gl.BACK);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
  }
}