document.getElementById("start-button").addEventListener("click", function () {
  // Get the input values
  const days = parseInt(document.getElementById("days").value) || 0;
  const hours = parseInt(document.getElementById("hours").value) || 0;
  const minutes = parseInt(document.getElementById("minutes").value) || 0;
  const seconds = parseInt(document.getElementById("seconds").value) || 0;

  // Calculate the total countdown time in seconds
  let totalSeconds =
    days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;

  // Get the current date and time
  const now = new Date();
  // Calculate the end date by adding the total seconds to the current time
  const endDate = new Date(now.getTime() + totalSeconds * 1000);

  // Update the end date display
  document.getElementById(
    "end-date"
  ).textContent = `End Date: ${endDate.toLocaleString()}`;

  function updateCountdown() {
    // Get the current time
    const currentTime = new Date();
    // Calculate the remaining time in seconds
    const remainingTime = Math.floor((endDate - currentTime) / 1000);

    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("days").value = 0;
      document.getElementById("hours").value = 0;
      document.getElementById("minutes").value = 0;
      document.getElementById("seconds").value = 0;
      return;
    }

    const remainingDays = Math.floor(remainingTime / (24 * 60 * 60));
    const remainingHours = Math.floor(
      (remainingTime % (24 * 60 * 60)) / (60 * 60)
    );
    const remainingMinutes = Math.floor((remainingTime % (60 * 60)) / 60);
    const remainingSeconds = remainingTime % 60;

    document.getElementById("days").value = remainingDays;
    document.getElementById("hours").value = remainingHours;
    document.getElementById("minutes").value = remainingMinutes;
    document.getElementById("seconds").value = remainingSeconds;
  }

  // Update the countdown immediately to reflect the initial values
  updateCountdown();

  // Set the interval to update the countdown every second
  const countdownInterval = setInterval(updateCountdown, 1000);
});
