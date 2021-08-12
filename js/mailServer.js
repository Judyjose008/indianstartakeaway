
document.getElementById("contactForm").addEventListener("submit", (e)=> {
    e.preventDefault();
    document.getElementById("submitButton").disabled = true;
    document.getElementById("submitButton").value = "Sending Message... ";
    Email.send({
        SecureToken : "578b3a4e-f3d2-440f-bc7d-80ffc5276a72",
        To : 'indianstartakeaway@gmail.com',
        From : document.getElementById("customerEmail").value,
        Subject : "Contact message from customer",
        Body : 'somthing'
    }).then( () => {
        document.getElementById("contactForm").reset();
        document.getElementById("successAlert").style.display = "block";
        setTimeout( ()=> {
            document.getElementById("submitButton").value = "Send Message";
            document.getElementById("submitButton").disabled = false;
        }, 2000);
    });        
});