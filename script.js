// ==========================================
// KADRI WEBSITE
// ==========================================


// ==========================================
// ANSWERS
// ==========================================

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

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(page => {

        page.classList.remove("active");

    });

    document
        .getElementById(pageId)
        .classList.add("active");
}


// ==========================================
// PUSHEEN ENTRANCE
// ==========================================

window.addEventListener("load", () => {

    const pusheen =
        document.getElementById("topPusheen");

    /*
        Give the browser a tiny moment to load
        everything before starting the entrance.
    */

    setTimeout(() => {

        pusheen.classList.add("entering");

    }, 300);


    /*
        Wait until the entrance animation is
        finished before starting the blinking.
        
        Animation:
        2 seconds

        Then blink every 5 seconds.
    */

    setTimeout(() => {

        startPusheenBlinking();

    }, 2300);

});


// ==========================================
// PUSHEEN BLINKING
// ==========================================

function startPusheenBlinking() {

    const pusheenImage =
        document.getElementById("topPusheenImage");


    setInterval(() => {

        /*
            Eyes closed
        */

        pusheenImage.src =
            "assets/pusheen-top-2.png";


        /*
            Keep the eyes closed briefly,
            then return to open eyes.
        */

        setTimeout(() => {

            pusheenImage.src =
                "assets/pusheen-top-1.png";

        }, 150);

    }, 5000);
}


// ==========================================
// PAGE 1
// ENTER YOUR NAME
// ==========================================

function checkName() {

    const input =
        document.getElementById("nameInput");

    const message =
        document.getElementById("nameMessage");

    const name =
        input.value.trim();


    answers.enteredName = name;


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
// WHAT'S MY NAME?
// ==========================================

function checkMyName() {

    const input =
        document.getElementById("myNameInput");

    const message =
        document.getElementById("myNameMessage");

    const name =
        input.value.trim();


    answers.myNameAnswer = name;


    if (name.toLowerCase() === "rehaan") {

        message.textContent =
            "Oh it is you! Sorry for doubting you Honeybun!";


        setTimeout(() => {

            document.getElementById(
                "introMessage"
            ).textContent =
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
        document.getElementById(
            "question1Message"
        );


    if (answer === "Yes") {

        message.textContent =
            "ILY TOO KADRUUUU!! <3";

    } else {

        message.textContent =
            "oh....";

    }


    document.getElementById(
        "question1Continue"
    ).style.display = "inline-block";
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
        document.getElementById(
            "question2Message"
        );


    message.textContent =
        "Ooooooh... interesting choice :3";


    document.getElementById(
        "question2Continue"
    ).style.display = "inline-block";
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
        document.getElementById(
            "question3Message"
        );


    message.textContent =
        "YAYYYYYYY NOW I CAN CALL YOU MY HONEYBUN MOMMY BABE KADRUUUU 😭";


    document.getElementById(
        "finalOptions"
    ).style.display = "none";


    saveAnswers();
}


// ==========================================
// EVIL NO BUTTON
// ==========================================

function handleNo() {

    answers.noButtonClicks++;


    const noButton =
        document.getElementById("noButton");


    // ======================================
    // FIRST 5 CLICKS
    // ======================================

    if (answers.noButtonClicks <= 5) {

        noButton.style.position =
            "fixed";


        const buttonWidth =
            noButton.offsetWidth;

        const buttonHeight =
            noButton.offsetHeight;


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
            Math.max(maxX - padding, 0)
            + padding;


        const randomY =
            Math.random() *
            Math.max(maxY - padding, 0)
            + padding;


        noButton.style.left =
            `${randomX}px`;

        noButton.style.top =
            `${randomY}px`;

    }


    // ======================================
    // SIXTH CLICK
    // ======================================

    else if (
        answers.noButtonClicks === 6
    ) {

        const vanishSound =
            new Audio(
                "assets/sounds/vanish.ogg"
            );


        vanishSound
            .play()
            .catch(error => {

                console.log(
                    "Could not play vanish sound:",
                    error
                );

            });


        /*
            WAIT EXACTLY ONE SECOND
            BEFORE VANISHING
        */

        setTimeout(() => {

            noButton.style.display =
                "none";


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

    console.log(
        "Answers:",
        answers
    );


    /*
        Google Sheets connection will
        be added later.
    */

}
