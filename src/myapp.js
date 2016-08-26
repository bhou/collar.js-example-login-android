require("tabris-js-node");
require("./collar.min.v0.3.8.js");
setImmediate = process.nextTick;  // fix tabris collarjs compatibility issue

var ui = require("./ui");

// init view
ui.initView();


// business logic
var collar = global.__collar__.collar;
var ns = collar.ns("tabris.login");

var loginPipeline = ns.sensor("listen to UI event", function(options) {
  ui.signinButton().on('touchend', () => {
    this.send({
      event : 'signin'
    });
  })
})
  .when("user click 'signin' button", signal => {
    return signal.get("event") === "signin"
  })
  .do("get email and password from UI", signal => {
    return {
      email : ui.emailInput().get("text"),
      password : ui.passwordInput().get("text")
    }
  })
  .do("check email and password pair", signal => {
    var email = signal.getResult().email;
    var password = signal.getResult().password;

    if (email === "test@collarjs.com" && password === "collarjs") {
      return "ok";
    } else {
      return "email and password not match";
    }
  });

loginPipeline
  .when("email and password match", signal => {
    return signal.getResult() === "ok";
  })
  .do("alert 'login ok'", signal => {
    ui.messageText().set("text", "login ok!");
  });

loginPipeline
  .when("email and password not match", signal => {
    return signal.getResult() !== "ok";
  })
  .do("alert 'login not ok'", signal => {
    ui.messageText().set("text", "login failed!");
  });
