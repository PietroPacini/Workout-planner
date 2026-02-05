const about = document.getElementById("tab");
const description = document.getElementById("description");
const buttons = document.querySelectorAll("button");
const inputs = document.querySelectorAll("input");

function toggleDescription () {
    description.hidden ? description.removeAttribute("hidden") : description.setAttribute("hidden", "");
    description.hidden ? about.textContent = "About" : about.textContent = "Close";
}

about.addEventListener("click", () => toggleDescription());


const workoutState = [
    {}
];
