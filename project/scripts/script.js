const jobData = [
  { title: "Front-End Developer", company: "TechNest", location: "Provo, UT" },
  { title: "IT Support Specialist", company: "UVU", location: "Orem, UT" },
  { title: "Network Administrator", company: "BYU", location: "Provo, UT" }
];


function displayJobs() {
  const jobList = document.getElementById("jobs-list");
  if (!jobList) return;
  jobList.innerHTML = ""; 

  jobData.forEach((job, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${job.title}</strong> at ${job.company}, ${job.location}`;
    jobList.appendChild(li);
  });
}


function setupNewsletterForm() {
  const form = document.getElementById("newsletter-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    if (email) {
      localStorage.setItem("newsletterEmail", email);
      showMessage(`Thanks for subscribing, ${email}!`, "success");
      form.reset();
    } else {
      showMessage("Please enter a valid email.", "error");
    }
  });
}


function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      localStorage.setItem("contactSubmission", JSON.stringify({ name, email, message }));
      showMessage(`Thank you, ${name}. Your message has been sent.`, "success");
      form.reset();
    } else {
      showMessage("Please complete all fields.", "error");
    }
  });
}


function showMessage(text, type) {
  const existing = document.getElementById("form-message");
  if (existing) existing.remove();

  const message = document.createElement("div");
  message.id = "form-message";
  message.className = type === "success" ? "success-message" : "error-message";
  message.textContent = text;

  const form = document.querySelector("form");
  if (form) form.appendChild(message);
}


window.addEventListener("DOMContentLoaded", () => {
  displayJobs();
  setupNewsletterForm();
  setupContactForm();
});
