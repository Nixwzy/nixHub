document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("myModal");
  var detailsBtns = document.querySelectorAll(".details-btn");
  var span = document.getElementsByClassName("close")[0];

  detailsBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var projectName = btn.parentElement.querySelector("h3").innerText;
      var message = "";
      if (projectName === "LearningFS") {
        message = "LearningFS is a repository to document my learning journey through fullstack courses, including projects, exercises, and detailed notes. For more information, check the repository.";
      } else if (projectName === "MyGarage") {
        message = "MyGarage is an app I created to simulate a vehicle storage system. It uses Python and Tkinter to create a simple interface where users can register and view vehicle details. For more information, check the repository.";
      } else if (projectName === "Awax Project") {
        message = "Awax Project is a website template related to design services. with the integration of front-end technologies. For more information, check the repository.";
      } else if (projectName === "Medicenter") {
        message = "Medicenter is a website template developed as part of the HTML5 and CSS3 course from B7Web. This project serves as practice to solidify foundational skills in web page structuring and styling, especially for healthcare-related websites.For more information, check the repository.";
      } else if (projectName === "Back-End Dev Imersion: Alura") {
        message = "This project is part of the Back-End Development Immersion course at Alura. It focuses on back-end technologies and provides practical experience with building back-end applications. For more information, check the repository.";
      }
      document.getElementById("modalMessage").innerText = message;
      modal.style.display = "block";
    });
  });
  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
