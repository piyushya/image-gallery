const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const directory = "images/";
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const alt = ["closeup image of human eye", "stone formation", "flower garden", 
"ancient egypt painting", "butterfly chilling on a leaf"];

/* Looping through images */
for(let i = 0; i < images.length; i++){
    const newImage = document.createElement('img');
    const src = directory + images[i];
    newImage.setAttribute('src', src);
    newImage.setAttribute('alt', alt[i]);
    thumbBar.appendChild(newImage);
}
thumbBar.addEventListener('click', (event) => {
    displayedImage.setAttribute('src', event.target.getAttribute('src'));
    displayedImage.setAttribute('alt', event.target.getAttribute('alt'));
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', ()=>{
    if (btn.getAttribute('class') === "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else{
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});
