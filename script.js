function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
 function sendMail(){
  let parms = {
    from_name: document.getElementById("name").value,
    email : document.getElementById('email').value,
    subject : document.getElementById('subject').value,
    message : document.getElementById('message').value
  }
  emailjs.send("service_service_l5qy8ho","template_template_4vq0x3f",parms).then(alert("Email Sent!!"))
 }
  