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
