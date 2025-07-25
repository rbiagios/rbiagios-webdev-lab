javascript
function updateTimestamp() {
  const timestampElement = document.getElementById("timestamp");
  const now = new Date();

  const options = {
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric", 
    hour: "2-digit", 
    minute: "2-digit",
    hour12: true
  };

  const formattedTime = now.toLocaleString("en-US", options);
  timestampElement.textContent = formattedTime;
}

// Run once when the page loads
updateTimestamp();
