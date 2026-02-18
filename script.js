

$(document).ready(function(){
   $(function () {
            $("#accordion").accordion({
                collapsible: true,
                active: false
            });
            AOS.init();

        });

        
        
        // contact validation
        
        
        
        $(".contact-form").on("submit", function (e) {
            
        e.preventDefault(); // stop default form submit
        
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let contact = $("#contact").val().trim();
        let message = $("#message").val().trim();
        
        let namePattern = /^[A-Za-z\s]+$/;
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let contactPattern = /^[0-9]{11,13}$/;
        
        // Name Validation
        if (name === "") {
            $('#nameerror').text("Please enter your full name.");
            return;
        }
        if (!namePattern.test(name)) {
            $('#nameerror').text("Name should contain letters only.");
            return;
        }
        
        // Email Validation
        if (email === "") {
            $('#emailerror').text('Please enter your email.');
            return;
        }
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        // Contact Validation
        if (contact === "") {
            $('#contacterror').text("contact number must be 11 to 13 digits.");
            return;
        }
        if (!contactPattern.test(contact)) {
            alert("Contact number must be 11 to 13 digits.");
            return;
        }
        
        // Message Validation
        if (message === "") {
            $('#messageerror').text("please enter your message");
            return;
        }
        
                document.getElementById("thankYouBox").style.display = "flex";

        
        this.reset(); // reset form
    });

    document.getElementById("closeBtn").addEventListener("click", function(){
    document.getElementById("thankYouBox").style.display = "none";
});
    
}); 
    
    




       





  
  