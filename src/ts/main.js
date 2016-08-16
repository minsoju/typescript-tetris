"use strict";
var three = require('three');
function test() {
    var scene = new three.Scene();
    var camera = new three.OrthographicCamera(10, 2, 3, 1, 1000);
    var renderer = new three.WebGLRenderer();
}
exports.test = test;
