let userFormDOM = document.querySelector("#userForm");

userFormDOM.addEventListener("submit", formHandler);

function formHandler(event) {
  event.preventDefault();

  const USER_NAME = document.querySelector("#username");
  const SCORE = document.querySelector("#score");

  if (USER_NAME.value && SCORE.value) {
    addItem(USER_NAME.value, SCORE.value); //gönderdikten sonra sıfırladık
    USER_NAME.value = "";
    SCORE.value = "";
  } else {
    console.log("hatali giris");
  }
}
function addItem(username, score) {
  const submittedDataDiv = document.getElementById("submittedData");
  const displayData = `
    <p><strong>Kullanıcı Adı:</strong> ${username}</p>
    <p><strong>Not Bilgisi:</strong> ${score}</p>
  `;

  submittedDataDiv.innerHTML = displayData;
}
