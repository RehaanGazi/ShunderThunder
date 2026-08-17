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


    // ==========================================
    // FIRST 5 CLICKS
    // TELEPORT
    // ==========================================

    if (answers.noButtonClicks <= 5) {

        /*
            Make the button fixed to the phone viewport.
            This means it can move anywhere on screen
            without affecting the rest of the page.
        */

        noButton.style.position = "fixed";

        const buttonWidth =
            noButton.offsetWidth;

        const buttonHeight =
            noButton.offsetHeight;


        /*
            Keep a little padding around the edges
            so the button never gets half-cut off.
        */

        const padding = 20;


        const maxX =
            window.innerWidth -
            buttonWidth -
            padding;

        const maxY =
            window.innerHeight -
            buttonHeight -
            padding;


        const randomX =
            Math.random() *
            Math.max(maxX - padding, 0) +
            padding;

        const randomY =
            Math.random() *
            Math.max(maxY - padding, 0) +
            padding;


        noButton.style.left =
            `${randomX}px`;

        noButton.style.top =
            `${randomY}px`;
    }


    // ==========================================
    // SIXTH CLICK
    // PLAY SOUND → WAIT 1 SECOND → VANISH
    // ==========================================

    else if (answers.noButtonClicks === 6) {

        const vanishSound =
            new Audio("assets/sounds/vanish.ogg");


        // Play the sound immediately
        vanishSound.play().catch(error => {
            console.log("Could not play vanish sound:", error);
        });


        /*
            Don't disappear immediately.

            She gets 1 full second of:
                "Oh god what is happening"
            
            before the button actually vanishes.
        */

        setTimeout(() => {

            noButton.style.display = "none";

            document.getElementById(
                "question3Message"
            ).textContent =
                "Interesting. I seem to have misplaced the No button.";

        }, 1000);


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
