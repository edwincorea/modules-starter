"use strict";

var _usersStore = require("./models/users-store");

var _usersController = require("./controllers/users-controller");

var _usersController2 = _interopRequireDefault(_usersController);

var _util = require("./lib/util");

var blegh = _interopRequireWildcard(_util);

require("./script");

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("LOADING APPLICATION");

var store = new _usersStore.UsersStore();
var $mount = (0, _jquery2.default)("#mount");
(0, _usersController2.default)($mount, store);

blegh.func1();
blegh.func2();