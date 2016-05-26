var __ContactUs = function() {
  this.name = $("input[name=cnt_name]");
  this.mail = $("input[name=cnt_email]");
  this.message = $("textarea[name=cnt_message]");

  this.requestPost = function() {
    msg_data = this.checkValues();
    if (msg_data) {
      $.post("http://artoolrelay.altervista.org/respond.php",
        msg_data, null, "jsonp").done(
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
    if (data == "OK") {
      alert("Thank you. Your message was correctly sent.\n We will contact you as soon as possible");
    } else {
      alert("Something went wrong... Your request was not accepted... Mail us!\ninfo@artool.biz");
    }
  }

  this.fail = function(data) {
    console.log("ERROR");
    console.log(data);
    if(data) {
      if (data.responseText == "OK") {
        alert("Thank you. Your message was correctly sent.\n We will contact you as soon as possible");
        return;
      }
    }
    alert("Something went wrong... Please try again and check your internet connection...");
  }

  this.checkValues = function() {
    if (this.name.val() != "") {
      if (this.mail.val() != "") {
        return {
          name: this.name.val(),
          email: this.mail.val(),
          message: this.message.val()
        }
      }
    }
    return null;
  };

};

var contactUs = new __ContactUs();
$("#contactForm").submit(function() {
  try {
    contactUs.requestPost();
    return false;
  } catch(err) {
    console.log(err);
    return false;
  }
});
