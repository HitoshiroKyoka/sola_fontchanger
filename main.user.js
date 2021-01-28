// ==UserScript==
// @name         SoLA Font Change
// @namespace    @shiro_333
// @version      0.1
// @description  SoLAのフォントをいい感じにする　気に入らなければfont-family: 以下を好きに変えてね
// @author       ひとしろ
// @match        http://lostartifact.xsrv.jp/SoLA/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    GM_addStyle (
        `
        *{
           font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
         }
        `
    )
})();
