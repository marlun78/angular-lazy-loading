(function () {

    'use strict';

    angular.module('testApp', [
        'oc.lazyLoad',
        'services'
    ])
        .directive('testApp', testAppDirective)
        .run(initialize);

    function testAppDirective() {
        return {
            controller: TestAppController,
            controllerAs: 'testApp'
        };
    }

    function TestAppController() {
        this.title = 'Test App Title';
    }

    initialize.$inject = ['cssService'];
    function initialize(cssService) {
        cssService.init();
    }

}());