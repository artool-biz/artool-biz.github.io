var __ContactUs = function() {
  this.alpha = "181407732:AAE05fF2FKXCfcwURu2-SgMPNK-ibJP7cRc";
  this.beta  =  -135768168;
  //this.beta = 20537949;

  this.name = $("input[name=cnt_name]");
  this.mail = $("input[name=cnt_email]");
  this.message = $("textarea[name=cnt_message]");

  this.requestPost = function() {
    msg_text = this.checkValues();
    if (msg_text) {
      $.post("https://api.telegram.org/bot" + this.alpha + "/sendMessage",
        { chat_id: this.beta, text: msg_text }, null, "json").done(
          this.done
        ).success(
          this.success
        ).fail(
          this.fail
        );
      } else {
        alert("Please compile the form and try again...");
      }
  };

  this.done = function(data) {
    console.log("DONE");
  }

  this.success = function(data) {
    console.log("SUCCESS");
    console.log(data);
    if (data.ok == true) {
      alert("Thank you. Your message was correctly sent.\n We will contact you as soon as possible");
    } else {
      alert("Something went wrong... Your request was not accepted... Mail us!\ninfo@artool.biz");
    }
  }

  this.fail = function(data) {
    console.log("ERROR");
    console.log(data);
    alert("Something went wrong... Please try again and check your internet connection...");
  }

  this.checkValues = function() {
    if (this.name.val() != "") {
      if (this.mail.val() != "") {
        return "NEW MESSAGE FROM:\n" + this.name.val() + "\n" +
               this.mail.val() + "\n\n" +
               this.message.val() + "\nEND MESSAGE";
      }
    }
    return null;
  };

};

var contactUs = new __ContactUs();
$("#contactForm").submit(function() {
  contactUs.requestPost();
  return false;
});
