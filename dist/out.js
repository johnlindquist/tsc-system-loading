System.register("one", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var One;
    return {
        setters:[],
        execute: function() {
            One = (function () {
                function One() {
                    this.message = "One is the best!";
                }
                return One;
            }());
            exports_1("One", One);
        }
    }
});
System.register("two", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Two;
    return {
        setters:[],
        execute: function() {
            Two = (function () {
                function Two() {
                    this.message = "No! Two is better!";
                }
                return Two;
            }());
            exports_2("Two", Two);
        }
    }
});
System.register("app", ["one", "two"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var one_1, two_1;
    var one, two;
    return {
        setters:[
            function (one_1_1) {
                one_1 = one_1_1;
            },
            function (two_1_1) {
                two_1 = two_1_1;
            }],
        execute: function() {
            one = new one_1.One();
            console.log(one.message);
            two = new two_1.Two();
            console.log(two.message);
        }
    }
});
