import three = require('three');

export function test(): void{
  let scene = new three.Scene();
  let camera = new three.OrthographicCamera(10, 2, 3, 1, 1000);

  let renderer = new three.WebGLRenderer();
}
