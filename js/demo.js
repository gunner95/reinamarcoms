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
                    <p class="text-muted text-small mb-0">© 2020 Reina Marcoms, All Rights Reserved.</p>
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

leftNav();
footer();