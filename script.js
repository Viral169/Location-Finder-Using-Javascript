function getLocation() {
  const output = document.querySelector(".location");
  console.log(output);
  if (!navigator.geolocation) {
    output.innerHTML = "";
    return;
  }
  output.innerHTML = "loadig...";
  navigator.geolocation.getCurrentPosition(
    (position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      output.innerHTML = `<b>latitude:${latitude}</b><br><b>latitude:${longitude}</b><br>
        <a href="https://www.google.com/maps?q=${latitude},${longitude}"target="_blank">View on google map</a>
`;
    },
    (error) => {
      output.innerHTML = `Error:${error.message}`;
    }
  );
}

// // script.js

// let currentLanguage = 'English';
// let pinEntered = '';
// let withdrawalAmount = 0;

// document.getElementById("insert-card").addEventListener("click", function() {
//     document.getElementById("insert-card").style.display = "none";
//     document.getElementById("language-selection").classList.remove("hidden");
// });

// function selectLanguage(language) {
//     currentLanguage = language;
//     document.getElementById("language-selection").classList.add("hidden");
//     document.getElementById("pin-entry").classList.remove("hidden");
// }

// function validatePin() {
//     pinEntered = document.getElementById("pin").value;
//     if (pinEntered === "1234") {  // Hardcoded PIN for this simulation
//         document.getElementById("pin-entry").classList.add("hidden");
//         document.getElementById("withdrawal-screen").classList.remove("hidden");
//     } else {
//         alert("Invalid PIN. Try again.");
//     }
// }

// function withdrawCash() {
//     withdrawalAmount = document.getElementById("amount").value;
//     if (withdrawalAmount > 0) {
//         document.getElementById("withdrawal-screen").classList.add("hidden");
//         document.getElementById("withdrawn-amount").textContent = withdrawalAmount;
//         document.getElementById("confirmation").classList.remove("hidden");
//     } else {
//         alert("Please enter a valid amount.");
//     }
// }

// function restart() {
//     pinEntered = '';
//     withdrawalAmount = 0;
//     document.getElementById("confirmation").classList.add("hidden");
//     document.getElementById("insert-card").style.display = "block";
// }
