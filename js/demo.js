// ------------------------------------------------------ //
// For demo purposes, can be deleted
// ------------------------------------------------------ //

var stylesheet = $('link#theme-stylesheet');
$("<link id='new-stylesheet' rel='stylesheet'>").insertAfter(stylesheet);
var alternateColour = $('link#new-stylesheet');

// if ($.cookie("theme_csspath")) {
//     alternateColour.attr("href", $.cookie("theme_csspath"));
// }


$("#colour").change(function () {

    if ($(this).val() !== '') {

        var theme_csspath = $(this).val();

        alternateColour.attr("href", theme_csspath);

        $.cookie("theme_csspath", theme_csspath, {
            expires: 365,
            path: document.URL.substr(0, document.URL.lastIndexOf('/'))
        });

    }

    return false;
});

var quoteForm = function() {
  var x = document.getElementById('quote-form');
  if (x != null){
    x.innerHTML = `
    <!-- GET a QUOTE MODAL -->
    <div class="modal fade" id="quoteForm" tabindex="-1" role="dialog" aria-labelledby="quoteForm" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content p-md-3">
          <div class="modal-header">
            <h4 class="modal-title">Request a <span class="text-primary">quote</span></h4>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          </div>
          <div class="modal-body">
            <form name="quoteForm" id="quoteForm" method="post" action="quote.php" autocomplete="on">
              <div class="messages"></div>
              <div class="row">
                <span class="text-primary ml-1">No matter what your budget is, we customise services according to it . Our aim is to deliver you the best of the pack.</span>
              </div>
              <div class="row">
                <div class="form-group col-lg-6">
                  <label class="font-weight-bold text-small" for="name">Name<span class="text-primary ml-1">&#42;</span></label>
                  <input class="form-control" id="name" name="name" type="text" placeholder="Enter your name" required>
                </div>
                <!-- <div class="form-group col-lg-6">
                  <label class="font-weight-bold text-small" for="lastname">Last name<span class="text-primary ml-1">&#42;</span></label>
                  <input class="form-control" id="lastname" type="text" placeholder="Enter your last name" required>
                </div> -->
                <div class="form-group col-lg-12">
                  <label class="font-weight-bold text-small" for="email">Email address<span class="text-primary ml-1">&#42;</span></label>
                  <input class="form-control" id="email" type="email" name="email" placeholder="Enter your email address" required>
                </div>
                <div class="form-group col-lg-6">
                  <label class="font-weight-bold text-small" for="phone">Phone number <small class="small text-gray">optional</small></label>
                  <input class="form-control" id="phone" type="tel" name="phone" placeholder="Enter your phone number">
                </div>
                <div class="form-group col-lg-6">
                  <label class="font-weight-bold text-small" for="projecttype">Project type<span class="text-primary ml-1">&#42;</span></label>
                  <input class="form-control" id="projecttype" type="text" name="type" placeholder="Enter your project type" required>
                </div>
                <div class="form-group col-lg-6">
                  <label class="font-weight-bold text-small" for="budget">Estimated budget<span class="text-primary ml-1">&#42;</span></label>
                  <input class="form-control" id="budget" type="text" name="budget" placeholder="Enter your estimated budget in USD" required>
                </div>
                <div class="form-group col-lg-6">
                  <label class="font-weight-bold text-small" for="timeframe">Time frame<span class="text-primary ml-1">&#42;</span></label>
                  <input class="form-control" id="timeframe" type="text" name="time" placeholder="Maximum time for the project" required>
                </div>
                <div class="form-group col-lg-12">
                  <label class="font-weight-bold text-small" for="projectdetail">Project details<span class="text-primary ml-1">&#42;</span></label>
                  <textarea class="form-control" id="projectdetail" rows="5" name="message" placeholder="Provide a short brief about your project" required></textarea>
                </div>
                <div class="form-group col-lg-12">
                  <button class="btn btn-primary" type="submit">Submit your request</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    `
  }
}

var leftNav = function() {
        var x = document.getElementById('site-header');
        if (x != null){

            x.innerHTML = `
            <header class="header fixed-top header-animated">
              <nav class="navbar navbar-expand-lg navbar-light bg-color-main-inverted py-3">
                <div class="container"><a class="navbar-brand" href="index.html"><img src="img/custom/logo2.jpg" alt="..." width="100"></a>
                  <button class="navbar-toggler navbar-toggler-right bg-color-grey" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                      <li class="nav-item">
                        <!-- Link--><a class="nav-link active" href="index.html">Home</a>
                      </li>
                      <!--<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                        <div class="dropdown-menu mt-3" aria-labelledby="navbarDropdownMenuLink"><a class="dropdown-item" href="index.html">Homepage</a><a class="dropdown-item" href="about.html">About us</a><a class="dropdown-item" href="contact.html">Contact us</a></div>
                      </li>-->
                      <li class="nav-item mr-2">
                        <!-- Link--><a class="nav-link" href="contact.html">Contact us</a>
                      </li>
                      <li class="nav-item">             
                        <button class="btn btn-primary" type="button" data-target="#quoteForm" data-toggle="modal">Get a quote</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
            `
        }
    };

var footer = function() {
    var x = document.getElementById('footer');
    if (x != null){
        x.innerHTML = `
            <footer class="map-bg bg-color-main-inverted">
              <!--<div class="container py-5 border-bottom">
                <div class="row pt-5">
                  <div class="col-lg-3 col-md-6 mb-4 mb-lg-0"><img class="mb-3" src="img/custom/logo2.jpg" alt="" width="140">
                    <ul class="list-unstyled text-muted">
                      <li><a class="reset-anchor text-small" href="mailto:Iso@company.com">reinamarcoms@gmail.com</a></li>
                      <li><a class="reset-anchor text-small" href="tel:+975478985">+ 91 87 5442 9114</a></li>
                    </ul>
                    <ul class="list-inline text-muted">
                      <li class="list-inline-item"><a class="reset-anchor" href="#"><i class="fab fa-facebook-f"></i></a></li>
                      <li class="list-inline-item"><a class="reset-anchor" href="#"><i class="fab fa-twitter"></i></a></li>
                      <li class="list-inline-item"><a class="reset-anchor" href="#"><i class="fab fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                  <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                    <h4>About us</h4>
                    <ul class="list-unstyled text-muted mb-0">
                      <li class="mb-1"><a class="text-small reset-anchor" href="#">About us</a></li>
                    </ul>
                  </div>
                </div>
              </div> -->
              <div class="container py-4">           
                <div class="row text-center">
                  <div class="col-lg-6 p-lg-0 text-lg-left">
                    <p class="text-muted text-small mb-0">© 2021 Reina Marcoms, All Rights Reserved.</p>
                  </div>
                  <div class="col-lg-6 p-lg-0 text-lg-right">
                    <p class="text-muted text-small mb-0">Template designed by <a class="text-primary reset-anchor" href="https://bootstraptemple.com/p/corporate">Bootstrap Temple</a></p>
                  </div>
                </div>
              </div>
            </footer>
            
        `
    }
}

var contactSubmit = function() {
  $('#contactForm').on('submit', function (e) {

      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
          var url = "contact.php";

          // POST values in the background the the script URL
          $.ajax({
              type: "POST",
              url: url,
              data: $(this).serialize(),
              success: function (data)
              {
                  // data = JSON object that contact.php returns

                  // we recieve the type of the message: success x danger and apply it to the 
                  var messageAlert = 'alert-' + data.type;
                  var messageText = data.message;

                  // let's compose Bootstrap alert box HTML
                  var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                  
                  // If we have messageAlert and messageText
                  if (messageAlert && messageText) {
                      // inject the alert to .messages div in our form
                      $('#contactForm').find('.messages').html(alertBox);
                      // empty the form
                      $('#contactForm')[0].reset();
                  }
              }
          });
          return false;
      }
  })
};

var quoteSubmit = function() {
  $('#quoteForm').on('submit', function (e) {

      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
          var url = "quote.php";

          // POST values in the background the the script URL
          $.ajax({
              type: "POST",
              url: url,
              data: $('form#quoteForm').serialize(),
              success: function (data)
              {
                  // data = JSON object that contact.php returns

                  // we recieve the type of the message: success x danger and apply it to the 
                  var messageAlert = 'alert-' + data.type;
                  var messageText = data.message;

                  // let's compose Bootstrap alert box HTML
                  var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                  
                  // If we have messageAlert and messageText
                  if (messageAlert && messageText) {
                      // inject the alert to .messages div in our form
                      $('#quoteForm').find('.messages').html(alertBox);
                      // empty the form
                      $('#quoteForm')[0].reset();
                  }
              }
          });
          return false;
      }
  })
};

quoteForm();
leftNav();
footer();
quoteSubmit();
contactSubmit();