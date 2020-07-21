"use strict";
// The debounce function receives our function as a parameter
var debounce = function (fn) {
    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    var frame;
    // The debounce function returns a new function that can receive a variable number of arguments
    return function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        // If the frame variable has been defined, clear it now, and queue for next frame
        if (frame) {
            cancelAnimationFrame(frame);
        }
        // Queue our function call for the next frame
        frame = requestAnimationFrame(function () {
            // Call our function and pass any params we received
            fn.apply(void 0, params);
        });
    };
};
// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
var storeScroll = function () {
    document.documentElement.dataset.scroll = window.scrollY.toString();
};
// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });
// Update scroll position for first time
storeScroll();
