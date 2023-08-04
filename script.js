document.addEventListener("DOMContentLoaded", function () {
    var certificatesLink = document.querySelector('a[href="certificates.html"]');
    var profileSection = document.getElementById("about");

    function showCertificates() {
        document.getElementById("social-links").style.display = "none";
        document.getElementById("certificates").style.display = "block";
        profileSection.style.display = "none"; // Hide the profile section
        certificatesLink.classList.add("active");
    }

    function showHomePage() {
        document.getElementById("social-links").style.display = "block";
        document.getElementById("certificates").style.display = "none";
        profileSection.style.display = "block"; // Show the profile section
        certificatesLink.classList.remove("active");
    }

    certificatesLink.addEventListener("click", function (event) {
        showCertificates();
        event.preventDefault();
    });

    document.querySelector('a[href="index.html"]').addEventListener("click", function (event) {
        showHomePage();
        event.preventDefault();
    });

    showHomePage();
});
