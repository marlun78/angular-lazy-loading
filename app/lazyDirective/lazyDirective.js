(function () {

    'use strict';

    angular.module('lazyDirective', [])
        .directive('lazyDirective', lazyDirective)
        .run(initialize);

    function lazyDirective() {
        return {
            controller: LazyController,
            controllerAs: 'lazyDirective',
            // 1. Add the HTML template needed
            template: '<div class="lazy-directive">{{ lazyDirective.title }}</div>'
            // Should obviously be a task for the build process
            //template: '<%= inlineHtml('lazyDirective.html') %>'
        };
    }

    function LazyController() {
        this.title = 'Lazy Directive Title';
    }

    initialize.$inject = ['cssService'];
    function initialize(cssService) {
        // 2. Inject any needed CSS
        cssService.append('lazyDirective/lazyDirective.css', '.lazy-directive { color: pink; font-family: "Comic Sans MS, cursive"; font-size: 48px; }');
        // Same as above...
        //cssService.append('<%= inlineCss('lazyDirective.css') %>');
    }

}());