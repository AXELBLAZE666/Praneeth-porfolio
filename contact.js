const scriptURL = "https://script.google.com/macros/s/AKfycbwyRx5H6gs4TmZ1a74rItmve6g_7DEr50PL_nyzyCcNjXYRwbTAbY20PMOC3_QnnkjpuQ/exec";
const form = document.forms["contact-form"];

form.addEventListener("submit", e => {
  e.preventDefault();

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then(response => response.json()) // Convert response to JSON
    .then(data => {
      if (data.result === "success") {
        alert("✅ Thank you! Your message has been sent.");
        form.reset(); // Clear the form after submission
      } else {
        alert("❌ Error: " + data.error);
      }
    })
    .catch(error => {
      console.error("Error!", error);
      alert("⚠️ Something went wrong. Check the console for details.");
    });
});
