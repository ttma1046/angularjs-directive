    beforeEach(function() {
        browser.get('index.html');
    });

    it('should show off bindings', function() {
        var containerElm = element(by.css('div[ng-controller="Controller"]'));
        var nameBindings = containerElm.all(by.binding('name'));

        expect(nameBindings.count()).toBe(5);
        nameBindings.each(function(elem) {
            expect(elem.getText()).toEqual('Max Karl Ernst Ludwig Planck (April 23, 1858 – October 4, 1947)');
        });
    });

    /*
    Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */
