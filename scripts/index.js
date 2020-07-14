"use strict";
var _a;
var header = {
    nav: document.querySelector('nav'),
    toggle: document.getElementById('nav-toggle'),
    menuIcon: document.getElementById('nav-menu-icon'),
    closeIcon: document.getElementById('nav-close-icon'),
};
(_a = header.toggle) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var _a, _b, _c;
    (_a = header.menuIcon) === null || _a === void 0 ? void 0 : _a.classList.toggle('hidden');
    (_b = header.closeIcon) === null || _b === void 0 ? void 0 : _b.classList.toggle('hidden');
    (_c = header.nav) === null || _c === void 0 ? void 0 : _c.classList.toggle('hidden');
});
