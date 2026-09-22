/* =====================================================
   MY FEELINGS ❤️
   6 PHOTO LOVE PROPOSAL WEBSITE
   ===================================================== */


/* =====================================================
   FORMSPREE
   ===================================================== */

const FORMSPREE_URL =
    "https://formspree.io/f/xzepljrz";


/* =====================================================
   BACKGROUND SONG
   ===================================================== */

const bgMusic =
    document.getElementById("bgMusic");


/* =====================================================
   6 PHOTOS + MY FEELINGS
   ===================================================== */

const memories = [

    {
        image: "photo11.jpg",

        heading: "My Feeling 1 ❤️",

        messageTitle: "First Feeling 🥰",

        message:
            "உன்னை முதலில் பார்த்த அந்த நொடியிலேயே " +
            "என் மனசுக்குள் ஏதோ ஒரு அழகான feeling வந்தது... " +
            "அது என்னன்னு அப்போது புரியவில்லை. " +
            "இப்போ புரிகிறது... அது காதல்! ❤️"
    },


    {
        image: "photo12.jpg",

        heading: "My Feeling 2 💕",

        messageTitle: "You Became Special ❤️",

        message:
            "எல்லாரையும் போல உன்னை பார்க்க ஆரம்பித்தேன்... " +
            "ஆனா கொஞ்சம் கொஞ்சமாக " +
            "என் பார்வையில் நீ மட்டும் special ஆகிட்ட. " +
            "என் மனசுக்கு பிடித்த ஒருத்தியாக மாறிட்ட. 🥹❤️"
    },


    {
        image: "photo13.jpg",

        heading: "My Feeling 3 😍",

        messageTitle: "I Started Missing You 💗",

        message:
            "உன்னிடம் பேசாத நாளில் ஏதோ ஒன்று missing மாதிரி இருக்கும்... " +
            "உன் ஒரு message வந்தாலே smile வரும். " +
            "அப்போதுதான் புரிந்தது... " +
            "நீ என் வாழ்க்கையில் ஒரு important person ஆகிட்ட. ❤️"
    },


    {
        image: "photo14.jpg",

        heading: "My Feeling 4 🫶",

        messageTitle: "My Heart Chose You ❤️",

        message:
            "நான் யோசித்து உன்னை choose பண்ணல... " +
            "என் heart தான் உன்னை choose பண்ணிச்சு. " +
            "எவ்வளவு பேர் வாழ்க்கையில் வந்தாலும், " +
            "என் மனசுக்கு பிடித்தவள் நீ மட்டும் தான். 🥹💖"
    },


    {
        image: "photo15.jpg",

        heading: "My Feeling 5 💞",

        messageTitle: "I Want You In My Life 🌹",

        message:
            "என் சந்தோஷமான moments-ல மட்டும் இல்லாமல்... " +
            "என் கஷ்டமான moments-லயும் " +
            "என்னுடன் நீ இருக்கணும். " +
            "என் வாழ்க்கையின் ஒரு அழகான பகுதியாக இல்லாமல், " +
            "என் வாழ்க்கையாகவே இருக்கணும். ❤️"
    },


    {
        image: "photo16.jpg",

        heading: "My Feeling 6 💍",

        messageTitle: "The Feeling I Can't Hide ❤️",

        message:
            "இத்தனை நாள் என் மனசுக்குள் வைத்திருந்த " +
            "ஒரே ஒரு உண்மையை இப்போ சொல்லணும்... " +
            "நான் உன்னை உண்மையாக காதலிக்கிறேன். ❤️ " +
            "என் வாழ்க்கையை உன்னுடன் share பண்ண ஆசைப்படுறேன். " +
            "இது தான் என் உண்மையான Feeling. 🥹💍"
    }

];


/* =====================================================
   ELEMENTS
   ===================================================== */

const startScreen =
    document.getElementById("startScreen");

const memoryScreen =
    document.getElementById("memoryScreen");

const finalScreen =
    document.getElementById("finalScreen");

const thankYouScreen =
    document.getElementById("thankYouScreen");

const openBtn =
    document.getElementById("openBtn");

const currentNumber =
    document.getElementById("currentNumber");

const memoryHeading =
    document.getElementById("memoryHeading");

const memoryPhoto =
    document.getElementById("memoryPhoto");

const scratchCanvas =
    document.getElementById("scratchCanvas");

const scratchHint =
    document.querySelector(".scratch-hint");

const specialMessage =
    document.getElementById("specialMessage");

const messageTitle =
    document.getElementById("messageTitle");

const messageText =
    document.getElementById("messageText");

const nextBtn =
    document.getElementById("nextBtn");

const yesBtn =
    document.getElementById("yesBtn");

const noBtn =
    document.getElementById("noBtn");

const answerButtons =
    document.getElementById("answerButtons");

const feedbackBox =
    document.getElementById("feedbackBox");

const feedbackEmoji =
    document.getElementById("feedbackEmoji");

const feedbackTitle =
    document.getElementById("feedbackTitle");

const feedbackDescription =
    document.getElementById("feedbackDescription");

const feedback =
    document.getElementById("feedback");

const submitBtn =
    document.getElementById("submitBtn");

const submitStatus =
    document.getElementById("submitStatus");

const thankMessage =
    document.getElementById("thankMessage");


const ctx =
    scratchCanvas.getContext("2d");


/* =====================================================
   VARIABLES
   ===================================================== */

let currentMemory = 0;

let drawing = false;

let scratchCount = 0;

let selectedAnswer = "";

let alreadySubmitted = false;

let memoryRevealed = false;


/* =====================================================
   SHOW SCREEN
   ===================================================== */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(item => {

            item.classList.remove("active");

        });

    screen.classList.add("active");

}


/* =====================================================
   OPEN MY HEART + PLAY SONG
   ===================================================== */

openBtn.addEventListener(
    "click",
    () => {

        currentMemory = 0;

        if (bgMusic) {

            bgMusic.volume = 0.45;

            bgMusic.play()
                .catch(error => {

                    console.log(
                        "Music could not start:",
                        error
                    );

                });

        }

        showScreen(memoryScreen);

        loadMemory();

    }
);


/* =====================================================
   LOAD FEELING
   ===================================================== */

function loadMemory() {

    const feeling =
        memories[currentMemory];


    currentNumber.textContent =
        currentMemory + 1;


    memoryHeading.textContent =
        feeling.heading;


    memoryPhoto.src =
        feeling.image;


    messageTitle.textContent =
        feeling.messageTitle;


    messageText.textContent =
        feeling.message;


    specialMessage.classList.remove(
        "show"
    );


    nextBtn.classList.remove(
        "show"
    );


    scratchHint.style.display =
        "block";


    scratchCount = 0;

    memoryRevealed = false;


    scratchCanvas.style.pointerEvents =
        "auto";


    setupScratch();

}


/* =====================================================
   SETUP SCRATCH
   ===================================================== */

function setupScratch() {

    requestAnimationFrame(() => {

        scratchCanvas.width =
            scratchCanvas.offsetWidth;

        scratchCanvas.height =
            scratchCanvas.offsetHeight;


        ctx.globalCompositeOperation =
            "source-over";


        /* ================= COVER ================= */

        const gradient =
            ctx.createLinearGradient(
                0,
                0,
                scratchCanvas.width,
                scratchCanvas.height
            );


        gradient.addColorStop(
            0,
            "#ff4c9b"
        );


        gradient.addColorStop(
            0.5,
            "#871644"
        );


        gradient.addColorStop(
            1,
            "#ff7fba"
        );


        ctx.fillStyle =
            gradient;


        ctx.fillRect(
            0,
            0,
            scratchCanvas.width,
            scratchCanvas.height
        );


        /* ================= TEXT ================= */

        ctx.fillStyle =
            "rgba(255,255,255,0.95)";


        ctx.textAlign =
            "center";


        ctx.textBaseline =
            "middle";


        const fontSize =
            Math.max(
                18,
                scratchCanvas.width * 0.06
            );


        ctx.font =
            `bold ${fontSize}px Arial`;


        ctx.fillText(
            "Scratch To Reveal My Feeling ❤️",
            scratchCanvas.width / 2,
            scratchCanvas.height / 2
        );

    });

}


/* =====================================================
   GET POSITION
   ===================================================== */

function getPosition(event) {

    const rect =
        scratchCanvas.getBoundingClientRect();


    let clientX;

    let clientY;


    if (event.touches) {

        clientX =
            event.touches[0].clientX;

        clientY =
            event.touches[0].clientY;

    }

    else {

        clientX =
            event.clientX;

        clientY =
            event.clientY;

    }


    return {

        x:
            clientX - rect.left,

        y:
            clientY - rect.top

    };

}


/* =====================================================
   SCRATCH
   ===================================================== */

function scratch(event) {

    if (!drawing)
        return;


    if (memoryRevealed)
        return;


    const pos =
        getPosition(event);


    ctx.globalCompositeOperation =
        "destination-out";


    ctx.beginPath();


    ctx.arc(
        pos.x,
        pos.y,
        32,
        0,
        Math.PI * 2
    );


    ctx.fill();


    scratchCount++;


    /*
     * Reveal after enough scratching
     */

    if (scratchCount >= 35) {

        revealMemory();

    }

}


/* =====================================================
   MOUSE EVENTS
   ===================================================== */

scratchCanvas.addEventListener(
    "mousedown",
    () => {

        drawing = true;

    }
);


scratchCanvas.addEventListener(
    "mouseup",
    () => {

        drawing = false;

    }
);


scratchCanvas.addEventListener(
    "mouseleave",
    () => {

        drawing = false;

    }
);


scratchCanvas.addEventListener(
    "mousemove",
    scratch
);


/* =====================================================
   TOUCH EVENTS
   ===================================================== */

scratchCanvas.addEventListener(
    "touchstart",
    event => {

        event.preventDefault();

        drawing = true;

        scratch(event);

    },
    {
        passive: false
    }
);


scratchCanvas.addEventListener(
    "touchmove",
    event => {

        event.preventDefault();

        scratch(event);

    },
    {
        passive: false
    }
);


scratchCanvas.addEventListener(
    "touchend",
    () => {

        drawing = false;

    }
);


/* =====================================================
   REVEAL FEELING
   ===================================================== */

function revealMemory() {

    if (memoryRevealed)
        return;


    memoryRevealed = true;


    ctx.clearRect(
        0,
        0,
        scratchCanvas.width,
        scratchCanvas.height
    );


    scratchCanvas.style.pointerEvents =
        "none";


    scratchHint.style.display =
        "none";


    setTimeout(() => {

        specialMessage.classList.add(
            "show"
        );


        nextBtn.classList.add(
            "show"
        );


    }, 250);


    createHeartBurst();

}


/* =====================================================
   NEXT FEELING
   ===================================================== */

nextBtn.addEventListener(
    "click",
    () => {

        currentMemory++;


        /*
         * After all 6 feelings
         */

        if (
            currentMemory >=
            memories.length
        ) {

            showScreen(
                finalScreen
            );


            createHeartBurst();


            return;

        }


        loadMemory();

    }
);


/* =====================================================
   YES — LOVE PROPOSAL
   ===================================================== */

yesBtn.addEventListener(
    "click",
    () => {

        selectedAnswer =
            "YES 😍❤️";


        feedbackEmoji.textContent =
            "💖💍";


        feedbackTitle.textContent =
            "You Said YES! 🥹❤️";


        feedbackDescription.textContent =
            "என் மனசுக்கு இதைவிட அழகான answer வேற எதுவும் இருக்க முடியாது... " +
            "உன் மனதில் இருக்கிறதை என்னிடம் சொல்லு. ❤️";


        openFeedback();


        createHeartBurst();

    }
);


/* =====================================================
   NO
   ===================================================== */

noBtn.addEventListener(
    "click",
    () => {

        selectedAnswer =
            "NO 😭💔";


        feedbackEmoji.textContent =
            "💌";


        feedbackTitle.textContent =
            "Thank You For Being Honest ❤️";


        feedbackDescription.textContent =
            "உன் answer-ஐ நான் respect பண்ணுகிறேன். " +
            "உன் உண்மையான feeling-ஐ சொல்லலாம். ❤️";


        openFeedback();

    }
);


/* =====================================================
   OPEN FEEDBACK
   ===================================================== */

function openFeedback() {

    answerButtons.style.display =
        "none";


    feedbackBox.classList.add(
        "show"
    );

}


/* =====================================================
   SUBMIT FEEDBACK
   ===================================================== */

submitBtn.addEventListener(
    "click",
    async () => {

        if (alreadySubmitted)
            return;


        submitBtn.disabled =
            true;


        submitBtn.textContent =
            "Sending...";


        const userFeedback =
            feedback.value.trim();


        const formData =
            new FormData();


        formData.append(
            "answer",
            selectedAnswer
        );


        formData.append(
            "feedback",
            userFeedback ||
            "No additional feedback"
        );


        formData.append(
            "time",
            new Date().toLocaleString(
                "en-IN"
            )
        );


        formData.append(
            "website",
            window.location.href
        );


        try {

            const response =
                await fetch(
                    FORMSPREE_URL,
                    {
                        method: "POST",

                        body: formData,

                        headers: {
                            "Accept":
                                "application/json"
                        }
                    }
                );


            if (!response.ok) {

                throw new Error(
                    "Submission failed"
                );

            }


            alreadySubmitted =
                true;


            /* ================= YES ================= */

            if (
                selectedAnswer
                    .startsWith("YES")
            ) {

                thankMessage.textContent =
                    "உன் YES answer எனக்கு கிடைத்துவிட்டது. 🥹❤️ " +
                    "இனி இந்த beautiful moment என் heart-ல special-ஆ இருக்கும். 💍💕";

            }


            /* ================= NO ================= */

            else {

                thankMessage.textContent =
                    "உன் answer மற்றும் feedback எனக்கு கிடைத்துவிட்டது. ❤️ " +
                    "உன் honesty-க்கு நன்றி. 🙏";

            }


            showScreen(
                thankYouScreen
            );


            createHeartBurst();


        }

        catch (error) {

            console.error(
                error
            );


            submitStatus.textContent =
                "Something went wrong. Please try again.";


            submitBtn.disabled =
                false;


            submitBtn.textContent =
                "Send My Answer 💌";

        }

    }
);


/* =====================================================
   FLOATING HEART
   ===================================================== */

function createFloatingHeart() {

    const heart =
        document.createElement("div");


    heart.className =
        "floating-heart";


    const emojis = [

        "❤️",
        "💕",
        "💖",
        "💗",
        "💓",
        "💞",
        "💘",
        "💝"

    ];


    heart.textContent =
        emojis[
            Math.floor(
                Math.random() *
                emojis.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (15 + Math.random() * 20) +
        "px";


    heart.style.animationDuration =
        (5 + Math.random() * 5) +
        "s";


    document
        .getElementById(
            "heartsContainer"
        )
        .appendChild(heart);


    setTimeout(
        () => {

            heart.remove();

        },
        10000
    );

}


/* =====================================================
   CONTINUOUS HEARTS
   ===================================================== */

setInterval(
    createFloatingHeart,
    800
);


/* =====================================================
   HEART BURST
   ===================================================== */

function createHeartBurst() {

    for (
        let i = 0;
        i < 25;
        i++
    ) {

        setTimeout(
            createFloatingHeart,
            i * 60
        );

    }

  }
