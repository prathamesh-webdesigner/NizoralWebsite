document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const blogContainer = document.querySelector(".blogs-container");
    const blogCards = Array.from(document.querySelectorAll(".blogs-container .col"));

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");

            const category = this.getAttribute("link-category");

            // Filter visible cards
            const visibleCards = blogCards.filter(card => {
                if (category === "all") {
                    card.classList.add("blog-visible");
                    return true;
                } else if (card.getAttribute("data-category") === category) {
                    card.classList.add("blog-visible");
                    return true;
                } else {
                    card.classList.remove("blog-visible");
                    return false;
                }
            });

            // Reorder elements by appending only the visible ones
            blogContainer.innerHTML = "";
            visibleCards.forEach(card => blogContainer.appendChild(card));
        });
    });
});
