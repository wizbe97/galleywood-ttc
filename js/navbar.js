document.addEventListener("DOMContentLoaded", function () {
    var teamsButton = document.querySelector(".dropbtn");
    var dropdownContent = document.querySelector(".dropdown-content");

    teamsButton.addEventListener("click", function () {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
});
