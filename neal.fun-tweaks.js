// ==UserScript==
// @name         neal.fun tweaks.
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  collection of tweaks for the games on neal.fun
// @author       aRandomMenno
// @match        https://neal.fun/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    var css = ` @media screen and (min-width:  1150px) {
        .sidebar[data-v-8889ef30] { width:  500px; }
        .logo[data-v-8889ef30] { right:  530px; width:  85px; }
        .side-controls[data-v-8889ef30] { right:  515px; } } 
    `;

    // Check if the current URL matches the desired pattern
    if (window.location.href.includes('neal.fun/infinite-craft/')) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    }
})();
