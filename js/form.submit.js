/* Form Submission */

function FormSubmit() {
  _mail = $('input[name="mail"]').val();
  _subject = $('input[name="subject"]').val();
  _body = $('textarea[name="body"]').val();

  _url = "http://getsimpleform.com/messages/ajax?form_api_token=";
  /* Set env from production to testing */
  if (window.location.hostname == "localhost") {
    _token = _url + "55fa4a65f61f5d12b35871caf206b00d";
  } else {
    _token = _url + "c9c894c5876721e976a253e988d23c77";
  }
  $('input[name="submit"]').val('Wait...').removeClass('btn-success').addClass('btn-warning');
  $.ajax({
    dataType: 'jsonp',
    url: _token,
    success: function() {
      $('#modalForm').html('<p style="color:green">Success!</p><p>Thank you! We will contact you as soon as possible!</p>');
    },
    error: function() {
       $('#modalForm').html('<p style="color:red;">Error ' + error.status + '</p><p>Please try again or contact us at <a href="mailto:info@artool.biz">info@artool.biz</a></p>');
    },
    data: {
      mail: _mail,
      subject: _subject,
      body: _body
    }
  }).always( function(xhr, resp, error) {
    if (error.statusText == "success") {
      $('#modalForm').html('<p style="color:green">Success!</p><p>Thank you! We will contact you as soon as possible!</p>');
    } else {
       $('#modalForm').html('<p style="color:red;">Error ' + error.status + '</p><p>Please try again or contact us at <a href="mailto:info@artool.biz">info@artool.biz</a></p>');
    }
  });


};
