const about = document.getElementById("tab");
const description = document.getElementById("description");
const buttons = document.querySelectorAll("button");
const exerciseName = document.getElementById("exercise-name");
const sets = document.getElementById("sets");
const reps = document.getElementById("reps");
const notes = document.getElementById("notes");
const msg = document.getElementById("workout-message");

function toggleDescription () {
    description.hidden ? description.removeAttribute("hidden") : description.setAttribute("hidden", "");
    description.hidden ? about.textContent = "About" : about.textContent = "Close";
}

about.addEventListener("click", () => toggleDescription());

const workoutState = [];

function resetUI () {
    exerciseName.value = "";
    sets.value = "";
    reps.value = "";
    notes.value = "";
}

function addExercise () {
    if (exerciseName.value && sets.value && reps.value) {
        const exerciseObj = {
            exercise: exerciseName.value.trim().toLowerCase(),
            sets: sets.value,
            reps: reps.value,
            notes: notes.value
        };
        workoutState.push(exerciseObj);
    } else {
        msg.textContent = `Please fill every input before adding an exercise`;
    }
    resetUI();
}

function deleteExercise () {
    for (let i = 0; i < workoutState.length; i++) {
        if (exerciseName.value.trim().toLowerCase() === workoutState[i].exercise) {
            workoutState.splice(i, 1);
        }
    }
    resetUI();
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

function countExercises () {
    if (msg.textContent[0] !== "T") {
        const countMessage = `Total n. of exercises: ${workoutState.length}`;
        msg.textContent = `${countMessage}

        ${msg.textContent}`;
    }
}

const actions = {
    "add-btn": addExercise,
    "delete-btn": deleteExercise,
    "show-btn": showWorkout,
    "count-btn": countExercises
};

buttons.forEach((button) => button.addEventListener("click", event => {
    const action = actions[event.target.id];
    if (action) {
        action();
    }
}))

