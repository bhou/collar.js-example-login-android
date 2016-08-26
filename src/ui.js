var emailInput = null;
var passwordInput = null;
var signinButton = null;
var messageText = null;

function initView() {
  var page = tabris.create("Page", {
    title: "Collar.js Login Example",
    topLevel: true,
    // background : "#00FF00"
  });

  // email UI
  var emailRow = tabris.create("Composite", {
    layoutData : {
      top : 0,
      left : 10,
      right : 10
    },
    height : 50,
    // background : "#0000FF"
  }).appendTo(page);

  var emailLabel = tabris.create("TextView", {
    // font: "24px",
    layoutData: {
      centerY: 0,
      left: 10,
      right: "70%"
    },
    // background : "#FF0000"
  }).appendTo(emailRow);
  emailLabel.set("text", "Email");

  emailInput = tabris.create("TextInput", {
    layoutData: {
      centerY : 0,
      left : [emailLabel, 10],
      right : 10
    },
    message: "Email"
  }).appendTo(emailRow);

  // password UI
  var passwordRow = tabris.create("Composite", {
    layoutData : {
      top : [emailRow, 0],
      left : 10,
      right : 10
    },
    height : 50,
    // background : "#0000FF"
  }).appendTo(page);

  var passwordLabel = tabris.create("TextView", {
    // font: "24px",
    layoutData: {
      centerY: 0,
      left: 10,
      right: "70%"
    },
    // background : "#FF0000"
  }).appendTo(passwordRow);
  passwordLabel.set("text", "Password");

  passwordInput = tabris.create("TextInput", {
    layoutData: {
      centerY : 0,
      left : [passwordLabel, 10],
      right : 10
    },
    type: "password",
    message: "Password"
  }).appendTo(passwordRow);


  // signin UI
  signinButton = tabris.create("Button", {
    layoutData : {
      top : [passwordRow, 10],
      left: 10
    },
    background : "#33C3F0",
    textColor : "#FFFFFF",
    text: "Sign In",
  }).appendTo(page);

  signinButton.on("touchstart", () => {
    signinButton.set({background : "#FF0000"})
    setTimeout(() => {
      signinButton.set({background : "#33C3F0"})
    }, 300);
  })

  // message UI
  messageText = tabris.create("TextView", {
    font: "24px",
    layoutData: {
      top: [signinButton, 50],
      centerX: 0
    },
  }).appendTo(page);
  //messageText.set("text", "login result");


  page.open();
}

module.exports = {

  emailInput : function() {return emailInput},
  passwordInput : function() {return passwordInput},
  signinButton : function() {return signinButton},
  messageText : function() {return messageText},


  initView : initView
}
