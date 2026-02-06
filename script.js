const about = document.getElementById("tab");
const description = document.getElementById("description");
const buttons = document.querySelectorAll("button");
const exerciseName = document.getElementById("exercise-name");
const sets = document.getElementById("sets");
const reps = document.getElementById("reps");
const notes = document.getElementById("notes");
const addBtn = document.getElementById("add-btn");
const showBtn = document.getElementById("show-btn");
const msg = document.getElementById("workout-message");

function toggleDescription () {
    description.hidden ? description.removeAttribute("hidden") : description.setAttribute("hidden", "");
    description.hidden ? about.textContent = "About" : about.textContent = "Close";
}

about.addEventListener("click", () => toggleDescription());

const workoutState = [];

function updateUI () {
    exerciseName.value = "";
    sets.value = "";
    reps.value = "";
    notes.value = "";
}

function addExercise () {
    if (exerciseName.value && sets.value && reps.value) {
        const exerciseObj = {
            exercise: exerciseName.value, 
            sets: sets.value,
            reps: reps.value,
            notes: notes.value
        };
        workoutState.push(exerciseObj);
    } else {
        msg.textContent = `Please fill every input before adding an exercise`;
    }
    updateUI();
}

function showWorkout () {
    msg.textContent = "";
    for (let singleEx of workoutState) {
        msg.textContent += `Exercise: ${singleEx.exercise}
        sets: ${singleEx.sets}
        reps: ${singleEx.reps}
        notes: ${singleEx.notes}
        
        `;
    };
    if (!workoutState[0]) {
        msg.textContent = "Your workout is actually empty. Add an exercise!";
    }
}

addBtn.addEventListener("click", () => addExercise());
showBtn.addEventListener("click", () => showWorkout());

