window.addEventListener("load", () => {
  const nameInput = document.getElementById("name");
  const couponCodeInput = document.getElementById("coupon-code");
  const button = document.getElementById("button");
  const nowinElem = document.getElementById("no-win");
  const winElem = document.getElementById("you-won");

  button.addEventListener("click", async (e) => {
    e.preventDefault();
    winElem.style.display = "none"; //new click of button:
    nowinElem.style.display = "none"; // hide previous messages
    console.log("poop");
    let response = await fetch("winner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nameInput.value,
        couponcode: couponCodeInput.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == true) {
          winElem.style.display = "block";
        } else {
          nowinElem.style.display = "block";
        }
      })
      .catch(console.error);
  });

  // winElem.style.display = "block";
});
