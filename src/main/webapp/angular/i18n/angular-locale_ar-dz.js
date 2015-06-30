'use strict';
angular.module("ngLocale", [], ["$provide", function ($provide) {
    var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
    $provide.value("$locale", {
        "DATETIME_FORMATS": {
            "AMPMS": [
                "\u0635",
                "\u0645"
            ],
            "DAY": [
                "\u0627\u0644\u0623\u062d\u062f",
                "\u0627\u0644\u0627\u062b\u0646\u064a\u0646",
                "\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621",
                "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",
                "\u0627\u0644\u062e\u0645\u064a\u0633",
                "\u0627\u0644\u062c\u0645\u0639\u0629",
                "\u0627\u0644\u0633\u0628\u062a"
            ],
            "ERANAMES": [
                "\u0642\u0628\u0644 \u0627\u0644\u0645\u064a\u0644\u0627\u062f",
                "\u0645\u064a\u0644\u0627\u062f\u064a"
            ],
            "ERAS": [
                "\u0642.\u0645",
                "\u0645"
            ],
            "MONTH": [
                "\u062c\u0627\u0646\u0641\u064a",
                "\u0641\u064a\u0641\u0631\u064a",
                "\u0645\u0627\u0631\u0633",
                "\u0623\u0641\u0631\u064a\u0644",
                "\u0645\u0627\u064a",
                "\u062c\u0648\u0627\u0646",
                "\u062c\u0648\u064a\u0644\u064a\u0629",
                "\u0623\u0648\u062a",
                "\u0633\u0628\u062a\u0645\u0628\u0631",
                "\u0623\u0643\u062a\u0648\u0628\u0631",
                "\u0646\u0648\u0641\u0645\u0628\u0631",
                "\u062f\u064a\u0633\u0645\u0628\u0631"
            ],
            "SHORTDAY": [
                "\u0627\u0644\u0623\u062d\u062f",
                "\u0627\u0644\u0627\u062b\u0646\u064a\u0646",
                "\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621",
                "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",
                "\u0627\u0644\u062e\u0645\u064a\u0633",
                "\u0627\u0644\u062c\u0645\u0639\u0629",
                "\u0627\u0644\u0633\u0628\u062a"
            ],
            "SHORTMONTH": [
                "\u062c\u0627\u0646\u0641\u064a",
                "\u0641\u064a\u0641\u0631\u064a",
                "\u0645\u0627\u0631\u0633",
                "\u0623\u0641\u0631\u064a\u0644",
                "\u0645\u0627\u064a",
                "\u062c\u0648\u0627\u0646",
                "\u062c\u0648\u064a\u0644\u064a\u0629",
                "\u0623\u0648\u062a",
                "\u0633\u0628\u062a\u0645\u0628\u0631",
                "\u0623\u0643\u062a\u0648\u0628\u0631",
                "\u0646\u0648\u0641\u0645\u0628\u0631",
                "\u062f\u064a\u0633\u0645\u0628\u0631"
            ],
            "fullDate": "EEEE\u060c d MMMM\u060c y",
            "longDate": "d MMMM\u060c y",
            "medium": "y/MM/dd bootstrap-combined.min.css:mm:ss a",
            "mediumDate": "y/MM/dd",
            "mediumTime": "h:mm:ss a",
            "short": "y/M/d bootstrap-combined.min.css:mm a",
            "shortDate": "y/M/d",
            "shortTime": "h:mm a"
        },
        "NUMBER_FORMATS": {
            "CURRENCY_SYM": "din",
            "DECIMAL_SEP": ",",
            "GROUP_SEP": ".",
            "PATTERNS": [
                {
                    "gSize": 3,
                    "lgSize": 3,
                    "maxFrac": 3,
                    "minFrac": 0,
                    "minInt": 1,
                    "negPre": "-",
                    "negSuf": "",
                    "posPre": "",
                    "posSuf": ""
                },
                {
                    "gSize": 3,
                    "lgSize": 3,
                    "maxFrac": 2,
                    "minFrac": 2,
                    "minInt": 1,
                    "negPre": "\u00a4\u00a0-",
                    "negSuf": "",
                    "posPre": "\u00a4\u00a0",
                    "posSuf": ""
                }
            ]
        },
        "id": "ar-dz",
        "pluralCat": function (n, opt_precision) {
            if (n == 0) {
                return PLURAL_CATEGORY.ZERO;
            }
            if (n == 1) {
                return PLURAL_CATEGORY.ONE;
            }
            if (n == 2) {
                return PLURAL_CATEGORY.TWO;
            }
            if (n % 100 >= 3 && n % 100 <= 10) {
                return PLURAL_CATEGORY.FEW;
            }
            if (n % 100 >= 11 && n % 100 <= 99) {
                return PLURAL_CATEGORY.MANY;
            }
            return PLURAL_CATEGORY.OTHER;
        }
    });
}]);
