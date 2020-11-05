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

    let resp = await fetch("winner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nameInput.value,
        couponcode: couponCodeInput.value
      }),
    })
    let jsonObj = res.body //JSON already parsed: { "name": "my name" }
    let enteredCoupon = JSON.stringify(jsonObj.winner)

    if (enteredCoupon == true) {
        winElem.style.display = "block";
    } else {
        noWinElem.style.display = "block";
    }
   
    winElem.style.display = "block";

    })
    if (resp.status !== 200) console.log("Winner report failed");
    winElem.style.display = "block";
  });

