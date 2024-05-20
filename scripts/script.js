document.addEventListener("DOMContentLoaded", function () {
    function hideAllSections() {
        document.getElementById("home-page").style.display = "none";
        document.getElementById("certificates-container").style.display = "none";
        document.getElementById("projects-section").style.display = "none";
    }

    function showHomePage() {
        hideAllSections();
        document.getElementById("home-page").style.display = "block";
    }

    function showCertificateHub() {
        hideAllSections();
        document.getElementById("certificates-container").style.display = "block";
    }

    function showProjectsPage() {
        hideAllSections();
        document.getElementById("projects-section").style.display = "block";
    }

    window.showHomePage = showHomePage;
    window.showCertificateHub = showCertificateHub;
    window.showProjectsPage = showProjectsPage;

    showHomePage();
});
