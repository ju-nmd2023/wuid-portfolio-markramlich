// {
//   <script>
//     document.getElementById('submitButton').addEventListener('click', function(){" "}
//     {this.classList.toggle("shake")});
//   </script>;
// }

const buttonElement = document.getElementById("submitButton");
const inputElement = document.getElementById("input-name");
const resultMessage = document.getElementById("heading");

buttonElement.addEventListener("click", function (event) {
  event.preventDefault();
  let enteredName = inputElement.value;

  if (enteredName !== "") {
    resultMessage.innerText = "Thank you for reaching out " + enteredName + "!";
  } else {
    resultMessage.innerText = "Contact Me";
  }
});
