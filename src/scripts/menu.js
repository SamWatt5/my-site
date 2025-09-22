document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("hidden");
            navLinks.classList.toggle("block");

            // Animate hamburger lines
            const lines = hamburger.querySelectorAll(".line");
            lines.forEach((line, index) => {
                if (navLinks.classList.contains("hidden")) {
                    line.style.transform = "";
                } else {
                    if (index === 0) line.style.transform = "rotate(45deg) translateY(6px)";
                    if (index === 1) line.style.opacity = "0";
                    if (index === 2) line.style.transform = "rotate(-45deg) translateY(-6px)";
                }
            });
        });
    }
});
