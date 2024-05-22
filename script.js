function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
 function sendMail(){
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById('email').value,
    subject : document.getElementById('subject').value,
    message : document.getElementById('message').value
  }
  emailjs.send("service_service_7hg70qr","template_template_zfuruws",parms).then(alert("Email Sent!!"))
 }
  