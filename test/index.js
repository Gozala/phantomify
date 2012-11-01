"use strict";

exports["test example"] = function(assert) {
  assert.equal(2 + 2, 4, "2 + 2 = 4")
}

require("test").run(exports)
