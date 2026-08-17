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
// PUSHEEN
// ==========================================

const pusheenFrames = {

    open:
        "assets/pusheen-top-1.png",

    closed:
        "assets/pusheen-top-2.png"

};


let blinkTimer = null;


// ==========================================
// PAGE SYSTEM
// ==========================================

function showPage(pageId) {

    const pages =
        document.querySelectorAll(".page");


    pages.forEach(page => {

        page.classList.remove("active");

    });


    const newPage =
        document.getElementById(pageId);


    newPage.classList.add("active");


    /*
        Wait for the browser to render
        the new card before adding Pusheen.
    */

    requestAnimationFrame(() => {

        setupPusheen();

    });

}


// ==========================================
// CREATE PUSHEEN
// ==========================================

function setupPusheen() {

    const activePage =
        document.querySelector(
            ".page.active"
        );


    if (!activePage) {
        return;
    }


    const card =
        activePage.querySelector(
            ".content-card"
        );


    if (!card) {
        return;
    }


    /*
        Remove Pusheen from any previous page.
    */

    document
        .querySelectorAll(".card-pusheen")
        .forEach(pusheen => {

            pusheen.remove();

        });


    /*
        Create Pusheen container.
    */

    const pusheen =
        document.createElement("div");


    pusheen.className =
        "card-pusheen";


    /*
        Create image.
    */

    const image =
        document.createElement("img");


    image.src =
        pusheenFrames.open;


    image.alt =
        "Pusheen";


    pusheen.appendChild(image);


    /*
        Put Pusheen inside the card.
    */

    card.appendChild(pusheen);


    /*
        Start the pop-up animation
        on the next frame.
    */

    requestAnimationFrame(() => {

        pusheen.classList.add(
            "popped-up"
        );

    });


    /*
        Restart the single blink timer.
    */

    startBlinkTimer(image);

}


// ==========================================
// BLINK TIMER
// ==========================================

function startBlinkTimer(image) {

    /*
        Clear previous timer.
    */

    if (blinkTimer) {

        clearInterval(
            blinkTimer
        );

    }


    /*
        Blink every 5 seconds.
    */

    blinkTimer =
        setInterval(() => {

            /*
                Eyes closed.
            */

            image.src =
                pusheenFrames.closed;


            /*
                Eyes reopen after
                150 milliseconds.
            */

            setTimeout(() => {

                /*
                    Make sure the image
                    still exists.
                */

                if (
                    document.body.contains(image)
                ) {

                    image.src =
                        pusheenFrames.open;

                }

            }, 150);


        }, 5000);

}


// ==========================================
// START WEBSITE
// ==========================================

window.addEventListener(
    "load",
    () => {

        setupPusheen();

    }
);


// ==========================================
// PAGE 1
// ENTER NAME
// ==========================================

function checkName() {

    const input =
        document.getElementById(
            "nameInput"
        );


    const message =
        document.getElementById(
            "nameMessage"
        );


    const name =
        input.value.trim();


    answers.enteredName =
        name;


    /*
        Case-insensitive Kadri check.
    */

    if (
        name.toLowerCase() ===
        "kadri"
    ) {

        answers.identifiedCorrectly =
            true;


        message.textContent =
            "KADRUUUUUU ITS YOUUUU!!!";


        setTimeout(() => {

            showPage(
                "page-my-name"
            );

        }, 1200);


    } else {

        message.textContent =
            "Uhh... who are you..? I made this website for my best friend... idk you...";

    }

}


// ==========================================
// PAGE 2
// MY NAME
// ==========================================

function checkMyName() {

    const input =
        document.getElementById(
            "myNameInput"
        );


    const message =
        document.getElementById(
            "myNameMessage"
        );


    const name =
        input.value.trim();


    answers.myNameAnswer =
        name;


    /*
        Case-insensitive Rehaan check.
    */

    if (
        name.toLowerCase() ===
        "rehaan"
    ) {

        message.textContent =
            "Oh it is you! Sorry for doubting you Honeybun!";


        setTimeout(() => {

            document.getElementById(
                "introMessage"
            ).textContent =
                "Well, I have 3 questions for you! And I want you to answer them for me! So let's begin?";


            showPage(
                "page-intro"
            );

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

    showPage(
        "page-question-1"
    );

}


// ==========================================
// QUESTION 1
// ==========================================

function answerQuestion1(answer) {

    answers.question1 =
        answer;


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
    ).style.display =
        "inline-block";

}


// ==========================================
// QUESTION 2
// ==========================================

function goToQuestion2() {

    showPage(
        "page-question-2"
    );

}


function answerQuestion2(answer) {

    answers.question2 =
        answer;


    const message =
        document.getElementById(
            "question2Message"
        );


    message.textContent =
        "Ooooooh... interesting choice :3";


    document.getElementById(
        "question2Continue"
    ).style.display =
        "inline-block";

}


// ==========================================
// QUESTION 3
// ==========================================

function goToQuestion3() {

    showPage(
        "page-question-3"
    );

}


function answerQuestion3(answer) {

    answers.question3 =
        answer;


    answers.completed =
        true;


    const message =
        document.getElementById(
            "question3Message"
        );


    message.textContent =
        "YAYYYYYYY NOW I CAN CALL YOU MY HONEYBUN MOMMY BABE KADRUUUU 😭";


    document.getElementById(
        "finalOptions"
    ).style.display =
        "none";


    saveAnswers();

}


// ==========================================
// NO BUTTON
// ==========================================

function handleNo() {

    answers.noButtonClicks++;


    const noButton =
        document.getElementById(
            "noButton"
        );


    /*
        FIRST 5 CLICKS:
        TELEPORT
    */

    if (
        answers.noButtonClicks <= 5
    ) {

        noButton.style.position =
            "fixed";


        const buttonWidth =
            noButton.offsetWidth;


        const buttonHeight =
            noButton.offsetHeight;


        /*
            Safe space around edges.
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
            Math.max(
                maxX - padding,
                0
            ) +
            padding;


        const randomY =
            Math.random() *
            Math.max(
                maxY - padding,
                0
            ) +
            padding;


        noButton.style.left =
            `${randomX}px`;


        noButton.style.top =
            `${randomY}px`;

    }


    /*
        SIXTH CLICK:
        PLAY SOUND
        WAIT 1 SECOND
        VANISH
    */

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
            EXACTLY ONE SECOND.
        */

        setTimeout(() => {

            noButton.style.display =
                "none";


            document.getElementById(
                "question3Message"
            ).textContent =
                "Interesting. I seem to have misplaced the No button.";

        }, 1000);


        answers.question3 =
            "No";


        saveAnswers();

    }

}


// ==========================================
// SAVE ANSWERS
// ==========================================

function saveAnswers() {

    /*
        For now this just puts the answers
        into the browser console.

        Google Sheets saving will be added
        later.
    */

    console.log(
        "KADRI'S ANSWERS:",
        answers
    );

}
