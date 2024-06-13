const content = document.querySelectorAll(".content");
content.forEach((cont) => {
    const button = cont.querySelector(".button-img");
    const text = cont.querySelector(".text-title");
    button.addEventListener("click" , () => {
        content.forEach((item) => {
            if(item !== cont) {
                item.classList.remove("show-text");
                
            }
        });
        cont.classList.toggle("show-text");
    });

    text.addEventListener("click", () => {
        content.forEach((item) => {
            if(item !== cont){
                item.classList.remove("show-text");
            }
        });
        cont.classList.toggle("show-text");
    });
});