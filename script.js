document.addEventListener("DOMContentLoaded", function() {
    const orgBoxes = document.querySelectorAll(".organization-box");
    
    orgBoxes.forEach(box => {
        box.addEventListener("click", function() {
            const link = box.getAttribute("data-link");
            window.location.href = link;
        });
    });
});
