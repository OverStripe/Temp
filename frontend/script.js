const generateEmailButton = document.getElementById("generate-email");
const tempEmailDisplay = document.getElementById("temp-email");
const inbox = document.getElementById("inbox");

generateEmailButton.addEventListener("click", async () => {
    const response = await fetch("http://localhost:5000/api/emails/create", {
        method: "POST",
    });
    const data = await response.json();
    tempEmailDisplay.textContent = data.email;

    // Poll inbox for new emails every 5 seconds
    setInterval(async () => {
        const inboxResponse = await fetch(`http://localhost:5000/api/emails/list?email=${data.email}`);
        const inboxData = await inboxResponse.json();
        inbox.innerHTML = inboxData.emails.map(email => `<li>${email}</li>`).join("");
    }, 5000);
});
