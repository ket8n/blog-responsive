const form = document.querySelector(".addNewsCard");
let LOCATION = "index.html#trending-cards-container";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const imgURL = document.querySelector(".imgURL").value;
  const imgFile = document.querySelector(".imgFile").files[0];
  const title = document.querySelector(".title").value;
  const author = document.querySelector(".author").value;
  const date = document.querySelector(".date").value;

  if (!imgURL && !imgFile) {
    alert("Give img path or select img.");
    return;
  }

  if (imgFile) {
    const reader = new FileReader();

    reader.readAsDataURL(imgFile);

    reader.onload = function (e) {
      const imgBase64 = e.target.result;

      const newCard = { imgURL: imgURL || imgBase64, title, author, date };

      let prevCards = JSON.parse(localStorage.getItem("newsCards")) || [];
      prevCards.push(newCard);

      try {
        localStorage.setItem("newsCards", JSON.stringify(prevCards));
      } catch (e) {
        if (e.name === "QuotaExceededError") {
          alert("Local storage is full try using img file path explicitly.");
        } else {
          alert("Error: " + e.message);
        }

        LOCATION = "addNews.html";
      }

      form.reset();

      window.location.href = LOCATION;
    };
  } else {
    const newCard = { imgURL, title, author, date };

    let prevCards = JSON.parse(localStorage.getItem("newsCards")) || [];
    prevCards.push(newCard);

    localStorage.setItem("newsCards", JSON.stringify(prevCards));

    form.reset();

    window.location.href = LOCATION;
  }
});
