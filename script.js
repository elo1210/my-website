function changeTheme() {
    document.body.classList.toggle("dark-mode")
}

let images = [
    "20230507_112039.jpg",
    "2024060822174943.jpg",
    "Snapchat-1942605822.jpg",
    "20240627_150350.jpg",
    "20240811_112131.jpg"
]

let currentIndex = 0;

function openFullscreen(index) {
    console.log("openFullscreen triggered with index",index)
    currentIndex = index;
    document.getElementById("fullscreen-img").src = images[currentIndex];

    document.getElementById("fullscreen").style.display = "flex";
}

function closeFullscreen() {
    console.log("closing fullscreen...")
    document.getElementById("fullscreen").style.display = "none"
}

function nextImage(event) {
    event.stopPropagation();//stops the fullscreen from closing when clicking the arrow
    currentIndex = (currentIndex + 1)% images.length;
    document.getElementById("fullscreen-img").src= images.length[currentIndex]  
}
function prevImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length)% images.length;
    document.getElementById("fullscreen-img").src= images[currentIndex]
}
