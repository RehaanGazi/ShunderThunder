// ==========================================
// KADRI WEBSITE
// ==========================================

// Store all answers here.
// Later, we'll send this data to Google Sheets.
const answers = {
    enteredName: "",
    identifiedCorrectly: false,
    myNameAnswer: "",
    question1: "",
    question2: "",
    question3: "",
    noButtonClicks: 0,
    completed: false
};


// ==========================================
// PAGE SYSTEM
// ==========================================

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}


// ==========================================
// PAGE 1
// "Enter your name"
// ==========================================

function checkName() {

    const input = document.getElementById("nameInput");
    const message = document.getElementById("nameMessage");

    const name = input.value.trim();

    answers.enteredName = name;

    // Case insensitive comparison
    if (name.toLowerCase() === "kadri") {

        answers.identifiedCorrectly = true;

        message.textContent =
            "KADRUUUUUU ITS YOUUUU!!!";

        setTimeout(() => {
            showPage("page-my-name");
        }, 1200);

    } else {

        message.textContent =
            "Uhh... who are you..? I made this website for my best friend... idk you...";

    }
}


// ==========================================
// PAGE 2
// "What's my name?"
// ==========================================

function checkMyName() {

    const input = document.getElementById("myNameInput");
    const message = document.getElementById("myNameMessage");

    const name = input.value.trim();

    answers.myNameAnswer = name;

    // Case insensitive
    if (name.toLowerCase() === "rehaan") {

        message.textContent =
            "Oh it is you! Sorry for doubting you Honeybun!";

        setTimeout(() => {

            document.getElementById("introMessage").textContent =
                "Well, I have 3 questions for you! And I want you to answer them for me! So let's begin?";

            showPage("page-intro");

        }, 1500);

    } else {

        message.textContent =
            "Hmmmm... nope. That's not my name. Try again, Honeybun.";

    }
}


// ==========================================
// START QUESTIONS
// ==========================================

function startQuestions() {

    showPage("page-question-1");

}


// ==========================================
// QUESTION 1
// ==========================================

function answerQuestion1(answer) {

    answers.question1 = answer;

    const message =
        document.getElementById("question1Message");

    if (answer === "Yes") {

        message.textContent =
            "ILY TOO KADRUUUU!! <3";

    } else {

        message.textContent =
            "oh....";

    }

    document.getElementById(
        "question1Continue"
    ).style.display = "block";
}


// ==========================================
// QUESTION 2
// ==========================================

function goToQuestion2() {

    showPage("page-question-2");

}


function answerQuestion2(answer) {

    answers.question2 = answer;

    const message =
        document.getElementById("question2Message");

    message.textContent =
        "Ooooooh... interesting choice :3";

    document.getElementById(
        "question2Continue"
    ).style.display = "block";
}


// ==========================================
// QUESTION 3
// ==========================================

function goToQuestion3() {

    showPage("page-question-3");

}


function answerQuestion3(answer) {

    answers.question3 = answer;

    answers.completed = true;

    const message =
        document.getElementById("question3Message");

    message.textContent =
        "YAYYYYYYY NOW I CAN CALL YOU MY HONEYBUN MOMMY BABE KADRUUUU 😭";

    // Hide the buttons after saying yes
    document.getElementById(
        "finalOptions"
    ).style.display = "none";

    // Save the completed answers
    saveAnswers();

}


// ==========================================
// THE EVIL NO BUTTON
// ==========================================

function handleNo() {

    answers.noButtonClicks++;

    const noButton =
        document.getElementById("noButton");

    const screenWidth =
        window.innerWidth;

    const screenHeight =
        window.innerHeight;

    // First 5 clicks:
    // Teleport somewhere random.
    if (answers.noButtonClicks <= 5) {

        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        const randomX =
            Math.random() *
            (screenWidth - buttonWidth - 20) + 10;

        const randomY =
            Math.random() *
            (screenHeight - buttonHeight - 20) + 10;

        noButton.style.position = "fixed";

        noButton.style.left =
            randomX + "px";

        noButton.style.top =
            randomY + "px";
    }

    // Sixth click:
    // VANISH.
    else if (answers.noButtonClicks === 6) {

        const vanishSound =
            new Audio("assets/sounds/vanish.ogg");

        vanishSound.play();

        noButton.style.display = "none";

        document.getElementById(
            "question3Message"
        ).textContent =
            "Interesting. I seem to have misplaced the No button.";

        // Still save the answer attempt
        answers.question3 = "No";
        saveAnswers();
    }
}


// ==========================================
// SAVE ANSWERS
// ==========================================

function saveAnswers() {

    console.log("Answers:", answers);

    /*
        Google Sheets connection will go here.

        We'll add this once the website itself
        is completely working.
    */

}
