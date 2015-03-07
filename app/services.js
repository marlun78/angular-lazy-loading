(function () {

    'use strict';

    angular.module('services', [])
        .service('cssService', CssService);

    function CssService() {
        var element, head;
        var LINE_BREAK = '\n';

        this.init = function () {
            head = document.getElementsByTagName('head')[0];
            element = document.createElement('style');
            head.appendChild(element);
            element.innerHTML = LINE_BREAK;
        };

        this.append = function (comment, code) {
            var styles = '';
            if (typeof comment === 'string' && typeof code === 'undefined') {
                code = comment;
                comment = null;
            }
            if (comment) {
                styles = '/* ' + comment + ' */' + LINE_BREAK;
            }
            styles += code + LINE_BREAK;
            element.innerHTML += styles;
        };
    }

}());