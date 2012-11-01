"use strict";

exports["test example"] = function(assert) {
  assert.equal(2 + 2, 4, "2 + 2 = 4")
  process.exit(0)
}

require("test").run(exports)
