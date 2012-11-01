/*jshint browser:true */

"use strict";

process.exit = function(code) {
  // Communicate exit code via location hash.
  if (code === void(0) || code === 0) window.location.hash = "0"
  else window.location.hash = code
  // close a window.
  window.close()
}
