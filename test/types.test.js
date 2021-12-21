// https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html

// ======================== ES6 Module ==========================

import Artplayer from '../packages/artplayer/types/artplayer';

const art1 = new Artplayer({
    container: '.artplayer-app',
    url: './assets/sample/video.mp4',
});

// ======================== CommonJS Module ==========================

const Artplayer = require('../packages/artplayer/types/artplayer');

const art2 = new Artplayer({
    container: '.artplayer-app',
    url: './assets/sample/video.mp4',
});

// ======================== Triple-Slash Directives ==========================

/// <reference path="../packages/artplayer/types/artplayer.d.ts" />

/**
 * @type {Artplayer} - An Artplayer instance.
 */
const art3 = {};

/**
 * @param {Artplayer}  art4 - An Artplayer instance.
 */
function getInstance(art4) {
    //
}

// ======================== @typedef ==========================

/**
 * @typedef { import("../packages/artplayer/types/artplayer") } Artplayer
 */

/**
 * @type {Artplayer} - An Artplayer instance.
 */
const art5 = {};

/**
 * @param {Artplayer}  art6 - An Artplayer instance.
 */
function getInstance(art6) {
    //
}

// ======================== @param ==========================

/**
 * @param { import("../packages/artplayer/types/artplayer") } art7 - An Artplayer instance.
 */
function getInstance(art7) {
    //
}