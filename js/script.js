let body = document.querySelector(".js-body");
let backgroundColorButton = document.querySelector(".js-button");
let themeName = document.querySelector(".js-themeName");
let fontButton = document.querySelector(".js-fontButton");
let secondThemeName = document.querySelector(".js-secondThemeName");

backgroundColorButton.addEventListener("click", () => {
    body.classList.toggle("body--dark");

    themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
});

fontButton.addEventListener("click", () => {
    body.classList.toggle("body--fontSize");
    if (body.classList.contains("body--fontSize")) {
        secondThemeName.innerText = "Zmniejsz";
    } else {
        secondThemeName.innerText = "Zwiększ";
    }
});


