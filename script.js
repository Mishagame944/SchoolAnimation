
const images = [
    'lucid-origin_SpongeBob_SquarePants_full_body_classic_cartoon_style_same_look_as_the_original_-0 (1).jpg',
    'lucid-origin_SpongeBob_SquarePants_full_body_classic_cartoon_style_same_look_as_the_original_-0.jpg',
    'lucid-origin_SpongeBob_SquarePants_full_body_classic_cartoon_style_same_look_as_the_original_-0 (2).jpg',
    'lucid-origin_SpongeBob_SquarePants_full_body_classic_cartoon_style_same_look_as_the_original_-0 (3).jpg',
    'lucid-origin_SpongeBob_SquarePants_full_body_classic_cartoon_style_same_look_as_the_original_-0 (4).jpg'
];

let currentIndex = 0;


const image = document.getElementById('image');
const button = document.getElementById('changeButton');


function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
}


button.addEventListener('click', changeImage);
