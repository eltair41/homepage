{
    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("body--dark");
        themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
    };

    const toggleFont = () => {
        const body = document.querySelector(".js-body");
        const secondThemeName = document.querySelector(".js-secondThemeName");

        body.classList.toggle("body--fontSize");
        if (body.classList.contains("body--fontSize")) {
            secondThemeName.innerText = "Zmniejsz";
        } else {
            secondThemeName.innerText = "Zwiększ";
        };
    };

    const init = () => {
        const backgroundColorButton = document.querySelector(".js-button");
        const fontButton = document.querySelector(".js-fontButton");
        
        backgroundColorButton.addEventListener("click", toggleBackground);
        fontButton.addEventListener("click", toggleFont);
    };

    init();
}