const [current, images, opacity] = [
    document.querySelector("#current"), 
    document.querySelectorAll(".imgs img"), 
    0.6
    ];

//set first image the opacity 
images[0].style.opacity = opacity;

/* This is one option to make it: totally functional
images.forEach(img => img.addEventListener("click", e => current.src = e.target.src)); */

//Other way to do it:
images.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
    //Reset opacity 
    images.forEach(img => (img.style.opacity = 1));
    //Change current image
    current.src = e.target.src;
    //add fade-in class on current image
    current.classList.add("fade-in");
    //Remove fade-in class
    setTimeout(() => current.classList.remove("fade-in"), 500);
    //Change the opacity on clicked image
    e.target.style.opacity = opacity;
}
