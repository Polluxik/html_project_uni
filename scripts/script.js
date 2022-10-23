//hamburger menu
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


//slideshow
let slideIndex = 0;
showSlides();


function showSlides() {
    try {

        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }

        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000);
    }
    catch {

    }

}


//posledni uprava
let text = this.document.lastModified;
document.getElementById("date").innerHTML = "Web slouží jako zápočtový projekt<br>©2022 - Všechna práva vyhrazena<br>malindo1@uhk.cz<br>Poslední úprava: " + text;
console.log(text);