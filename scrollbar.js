// ==UserScript==
// @name         CSS customizer
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  With this you can edit all the css on all webpages! This one edits the scrollbar with css.
// @author       aRandomMenno
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';\
    var css = `
        ::-webkit-scrollbar {
            width: 16px;
            height: 16px;

        }
        ::-webkit-scrollbar-thumb {
            background-color: rgb(5, 5, 5);
            border-radius: 8px;
        }
        ::-webkit-scrollbar-thumb:active {
            background: rgb(10, 0 ,0);
        }
        ::-webkit-scrollbar-thumb:hover {
            background: rgb(10, 10 ,10);
        }
    `;

    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
})();
