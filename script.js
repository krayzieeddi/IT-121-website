//when the entire DOM tree is loaded then all the functions will be ready to use
$(document).ready(function() {

    // adds inactive class to all tabs except the first tab
    $('#tabs li a:not(:first)').addClass('inactive');

    //hides all the content containers then shows the first one
    $('.container').hide();
    $('.container:first').show();

    // start of tab switching function 
    $("#tabs li a").click(function() {

        var x = $(this).attr("id"); // stores the clicked tab id for concatnation later

        if($(this).hasClass("inactive") ) { // if the clicked tab has the inactive class
            $("#tabs li a").addClass("inactive"); // adds inactive class to all tabs
            $(this).removeClass("inactive"); // removes inactive class on clicked tab

            $(".container").hide(); // hides all container content
            $("#" + x + "Page").show(); // concants the target id container to show up
        }
    });

    $("img").hover(function() {
        $(this).toggle("hide");
    },
    function () {
       $(this).toggle("hide");
    });
        

// CREDITS to stack overflow users "Barlas Apaydin" and "cgp" for original code
//  link to stack overflow page
 // https://stackoverflow.com/questions/11645081/how-to-build-simple-tabs-with-jquery

    // $('#tabs li a').click(function(){
    //     var t = $(this).attr('id');

    //   if($(this).hasClass('inactive')){ //this is the start of our condition 
    //     $('#tabs li a').addClass('inactive');           
    //     $(this).removeClass('inactive');
        
    //     $('.container').hide();
    //     $('#'+ t + 'C').fadeIn('slow');
    //  }
    // });

    // document.getElementById("submit").addEventListener("click", function(event) {
    //     checkForm();


    

    $("form").submit(function(event) {
        
        // Prevent default form action. DO NOT REMOVE THIS LINE
        event.preventDefault();

        //   $("#formErrors").html("hello there");
          var formErrors = false;
          var errorMessages = "";
  
          errorMessages += "<ul>";
//  --------------------------------------------------------------------------------
        //   checks for name ---------------------------------------
          if ($("#fullname").val().length <= 1) { 
              // if name is more than one character
              errorMessages += "<li>Missing full name.</li>";
              $("#fullname").addClass("error");
              formErrors = true;
          } 
          else {
              // if meets requirement than remove the error message
              $("#fullname").removeClass("error");
          }

        //   checks for email ------------------------------
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
        if (!emailPattern.test($("#email").val())) {
            // if fails the test then display error message
            errorMessages += "<li>Invalid or missing email address</li>";
            $("#email").addClass("error");
            formErrors = true;
        } else {
            $("#email").removeClass("error");
        }
//   -------------------------------------------------------------------------
          errorMessages += "</ul>"
  
          if (formErrors) {
              $("#formErrors").html(errorMessages);
              $("#formErrors").style.diplay = "block";
          } else {
              $("#formErrors").hide();
          }
        
     });
     // end of form submit
    
}); // end of script 