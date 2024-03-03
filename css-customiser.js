// ==UserScript==
// @name         CSS customizer
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Put some css in the css var and watch the website change.
// @author       you
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var css = `<any css here>`;

    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
})();