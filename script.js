

document.querySelectorAll("ul li").forEach((item) => {
    item.addEventListener("mouseover", function () {
        // Get the image URL from the "image-url" attribute
        const imageUrl = this.getAttribute("image-url");

        // Apply the image URL to the hovered item's ::before pseudo-element
        const styleElement = document.createElement("style");
        styleElement.innerHTML = `
            ul li:hover::before {
                background-image: url('${imageUrl}');
            }
        `;

        // Remove any previously added dynamic styles
        document.head.querySelectorAll("[data-dynamic-style]").forEach((el) => el.remove());

        // Add the new style tag
        styleElement.setAttribute("data-dynamic-style", "true");
        document.head.appendChild(styleElement);
    });
});
