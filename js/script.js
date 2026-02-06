function calculateFee() {
  const hoursInput = document.getElementById("hours");
  const resultBox = document.getElementById("result");

  if (!hoursInput || !resultBox) return;

  const hours = parseFloat(hoursInput.value);

  if (isNaN(hours) || hours <= 0) {
    resultBox.classList.remove("d-none", "alert-info");
    resultBox.classList.add("alert-danger");
    resultBox.textContent = "Please enter a valid number of hours.";
    return;
  }


  const fee = hours * 20;

  resultBox.classList.remove("d-none", "alert-danger");
  resultBox.classList.add("alert-info");
  resultBox.textContent = `Estimated Fee: Rs ${fee.toFixed(2)}`;
}


document.addEventListener("DOMContentLoaded", () => {
  const slots = document.querySelectorAll(".slot-card");

  slots.forEach((slot) => {
    slot.style.cursor = "pointer";

    slot.addEventListener("click", () => {
      const badge = slot.querySelector(".badge");
      if (!badge) return;

      if (badge.textContent.trim() === "Available") {
        badge.textContent = "Occupied";
        badge.classList.remove("bg-success");
        badge.classList.add("bg-danger");
      } else {
        badge.textContent = "Available";
        badge.classList.remove("bg-danger");
        badge.classList.add("bg-success");
      }
    });
  });
});
