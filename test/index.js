"use strict";

var timers = require("timers")

exports["test example"] = function(assert) {
  assert.equal(2 + 2, 4, "2 + 2 = 4")
}

exports["test setTimeout"] = function(assert, done) {
  timers.setTimeout(function() {
    assert.pass("Timer was triggered")
    done()
  }, 10)
}

require("test").run(exports)
