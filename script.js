function sendmail() {
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("Subject").value.trim();
  const message = document.getElementById("textarea").value.trim();

  
  if (!name || !email || !subject || !message) {
    alert("Please fill all the fields before sending.");
    return; 
  }

  const params = { name, email, subject, message };
  const serviceid = "service_bzxd03g";
  const templateid = "template_u203z7i";

  emailjs.send(serviceid, templateid, params)
    .then((res) => {
      
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("Subject").value = "";
      document.getElementById("textarea").value = "";

      alert("Message sent successfully!");
      
    })
    .catch((err) => {
      console.log(err);
      alert("Failed to send message. Try again later.");
    });
}
 
let text = "ADHIL DEVELOPER";  
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typewriter").textContent += text.charAt(i);
        i++;
        setTimeout(type, 120); 
    }
}

type();


