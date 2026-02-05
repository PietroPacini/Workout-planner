const about = document.getElementById("tab");
const description = document.getElementById("description");
const buttons = document.querySelectorAll("button");
const exerciseName = document.getElementById("exercise-name");
const sets = document.getElementById("sets");
const reps = document.getElementById("reps");
const addBtn = document.getElementById("add-btn");
const showBtn = document.getElementById("show-btn");
const msg = document.getElementById("workout-message");

function toggleDescription () {
    description.hidden ? description.removeAttribute("hidden") : description.setAttribute("hidden", "");
    description.hidden ? about.textContent = "About" : about.textContent = "Close";
}

about.addEventListener("click", () => toggleDescription());

const workoutState = [];

function addExercise () {
    const exerciseObj = {
        exercise: exerciseName.value, 
        sets: sets.value,
        reps: reps.value
    };
    workoutState.push(exerciseObj);
}

function showWorkout () {
    msg.textContent = "";
    for (let singleEx of workoutState) {
        msg.textContent += `Exercise: ${singleEx.exercise}
        sets: ${singleEx.sets}
        reps: ${singleEx.reps}
        
        `;
    };
}

addBtn.addEventListener("click", () => addExercise());
showBtn.addEventListener("click", () => showWorkout());

