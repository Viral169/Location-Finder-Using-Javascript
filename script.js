function getLocation() {
  const output = document.querySelector(".location");
  console.log(output);
  if (!navigator.geolocation) {
    output.innerHTML = "";
    return;
  }
  output.innerHTML = "loading...";
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
