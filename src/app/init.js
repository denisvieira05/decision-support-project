 $(document).ready(function(){
    $('ul.tabs').tabs();
    $(".dropdown-button").dropdown();
    $('.parallax').parallax();
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible({
      accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
            $('ul.tabs').tabs();

  });
