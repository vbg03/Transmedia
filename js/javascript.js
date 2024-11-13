document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function handleScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight / 1.3;

            if (sectionTop < triggerPoint) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Para activar el efecto también en el primer renderizado
});
