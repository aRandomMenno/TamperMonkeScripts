// ==UserScript==
// @name         neal.fun tweaks.
// @namespace    http://tampermonkey.net/
// @version      beta-0.6
// @description  collection of tweaks for the games on neal.fun
// @author       aRandomMenno
// @match        https://neal.fun/*
// @icon         https://github.com/aRandomMenno/TamperMonkeScripts/blob/master/logo.svg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to apply styles
    function applyStyles(selector, styles) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => { Object.assign(element.style, styles); });
    }

    // Function to be called after the page has loaded
    function infiniteCraft() {
        // The styles to be applied
        applyStyles('.sidebar', { width: '500px' });
        applyStyles('.logo', { right: '530px', width: '85px' });
        applyStyles('.side-controls', { right: '515px' });
    }

    // Check if the current URL matches the desired pattern
    if (window.location.href.includes('neal.fun/infinite-craft/')) { window.onload = infiniteCraft; }
})();
