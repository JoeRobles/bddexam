(function () {
    "use strict";

    // SetupTestData class to set all our default mock data
    var SetupTestData = (function () {
        function SetupTestData() {
        }

        SetupTestData.expectedTitle = "Starter Angular Component Demo";
        SetupTestData.expectedContractedText = "12345 abcde ... [+] show more";
        SetupTestData.expectedExpandedText = "12345 abcde 67890 [-] show less";
        return SetupTestData;
    })();

    /* *************************
     * Protractor Documentation:
     * http://angular.github.io/protractor/#/tutorial
     * https://github.com/angular/protractor/blob/master/docs/debugging.md
     * to debug use browser.pause(); and from the terminal use 'repl'
     */
    describe("DemoApp", function () {
        beforeEach(function () {
            browser.get("http://0.0.0.0:5000");
            browser.waitForAngular();
        });

        it("should have the expected title", function () {
            expect(browser.getTitle()).toBe(SetupTestData.expectedTitle);
        });

        it('show more or less is working', function () {
            describe('first click on first link', function () {
                element.all(by.css("show-more-or-less a")).get(0).click().then(function () {
                    element.all(by.css("show-more-or-less")).get(0).getText().then(function (text) {
                        expect(text).toBe('12345 abcde 67890 [-] show less');
                    });
                });
            });

            describe('second click on first link', function () {
                element.all(by.css("show-more-or-less a")).get(0).click().then(function () {
                    element.all(by.css("show-more-or-less")).get(0).getText().then(function (text) {
                        expect(text).toBe('12345 abcde ... [+] show more');
                    });
                });
            });

            describe('first click on second link', function () {
                element.all(by.css("show-more-or-less a")).get(1).click().then(function () {
                    element.all(by.css("show-more-or-less")).get(1).getText().then(function (text) {
                        expect(text).toBe('12345 abcde 67890 [less]');
                    });
                });
            });

            describe('second click on second link', function () {
                element.all(by.css("show-more-or-less a")).get(1).click().then(function () {
                    element.all(by.css("show-more-or-less")).get(1).getText().then(function (text) {
                        expect(text).toBe('12345 abcde 6789 [more]');
                    });
                });
            })
        });

    });
})();
