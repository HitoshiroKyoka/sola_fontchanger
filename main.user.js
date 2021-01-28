// ==UserScript==
// @name         SoLA Font Change
// @namespace    @shiro_333
// @version      0.1
// @description  SoLAのフォントを変えるだけのツール　好きなフォントに変えてネ
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
