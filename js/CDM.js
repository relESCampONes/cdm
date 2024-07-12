console.log("Olá, mundo!");
var largura = document.querySelectorAll(".anim");
let a, b, c, d;

largura.forEach((element, index)=>{
    switch (index) {
        case 0:
            a = element;
            break;
        case 1:
            b = element;
            break;
        case 2:
            c = element;
            break;
        case 3:
            d = element;
            break;
        default:
            break;
    }
});

a.style.setProperty("--larguraHome", a.clientWidth + "px");
b.style.setProperty("--larguraStore", b.clientWidth + "px");
c.style.setProperty("--larguraReviews", c.clientWidth + "px");
d.style.setProperty("--larguraContact", d.clientWidth + "px");

// largura.forEach(function(pix){
//     console.log(pix.clientWidth + "px");
// })

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode'); // Alterna entre os temas
}