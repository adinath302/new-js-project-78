const text = document.querySelector(".sec-text");

const textload = () => {
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Trader";
    }, 8000);
}

textload();

setInterval(textload,12000);