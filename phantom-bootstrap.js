"use strict";

var system =  require("system")
var webpage = require("webpage")
var fs = require("fs")

var page = webpage.create()
page.onError = function(msg, trace) {
  var msgStack = ["ERROR: " + msg]
  if (trace) {
    msgStack.push("TRACE:")
      trace.forEach(function(t) {
        msgStack.push(" -> " + t.file + ": " + t.line +
                      (t.function ? " (in function '" + t.function + "')" : ""))
      })
  }
  console.error(msgStack.join("\n"))
}

page.onConsoleMessage = function(message) {
  console.log(message)
}
page.onClosing = function(closingPage) {
  var code = closingPage.url.split("#")[1]
  phantom.exit(code && parseInt(code))
}
page.open(system.args[2] || "about:blank", function onPage(status) {
  var source = fs.read(system.args[1])
  page.evaluateAsync(Function(source))
})
