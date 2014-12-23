(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$.fn.linked = function (options) {
    options = $.extend({}, options, {
        relationship : "siblings",
        filter : "input",
        events : ["change"],
        attributes : ["value", "max", "min"]
    });
    return this.each(function (index, element) {
        var $element = $(element),
            $related,
            i = options.attributes.length;
        $related = $element[options.relationship](options.filter);
        while (i--) {
            $related.attr(options.attributes[i],
                $element.attr(options.attributes[i]));
        }
        passEvents(options.events.join(" "), $element, $related);
        passEvents(options.events.join(" "), $related, $element);
    });
};

function passEvents(events, element1, element2) {
    element1.on(events, function (event) {
        if (event.target === element1[0]) {
            element2.trigger(event);
        }
    });
    element1.on("input", function (event) {
        element2.val(element1.val());
    });
}

},{}]},{},[1]);
