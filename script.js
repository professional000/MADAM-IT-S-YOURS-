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
   BACKGROUND MUSIC
   ===================================================== */

const bgMusic =
    document.getElementById("bgMusic");


/* =====================================================
   6 PHOTOS + FEELINGS
   ===================================================== */

const memories = [

    {
        image: "photo101.jpg",
        heading: "My Feeling 1 ❤️",
        messageTitle: "First Feeling 🥰",
        message:
            "நீ வெட்கப்படும் தருணம் என் மனம் கொள்ளை போகுதே..! ❤️‍🩹"
    },

    {
        image: "photo102.jpg",
        heading: "My Feeling 2 💕",
        messageTitle: "You Became Special ❤️",
        message:
            "கருமையான இருளுக்கு நிலா அழகு..! 🌜 " +
            "ஏனோ BLACK SAREE-க்கு நீ அழகு..!! 🥰💥"
    },

    {
        image: "photo103.jpg",
        heading: "My Feeling 3 😍",
        messageTitle: "I Started Missing You 💗",
        message:
            "தமிழ் இளைஞர்களுக்கு 'NAZRIYA' Attitude Queen..! 👑 " +
            "என்னிடத்தில் நீ மட்டுமே Rugged Queen..!! 👑💖"
    },

    {
        image: "photo104.jpg",
        heading: "My Feeling 4 🫶",
        messageTitle: "My Heart Chose You ❤️",
        message:
            "நான் இருக்க வேண்டிய இடத்தில் ஏனோ தெரியவில்லை..! 😇 " +
            "என்ன பாவம் செய்தேனோ, மச்சம் உள்ளது..!! 🥀🍂"
    },

    {
        image: "photo105.jpg",
        heading: "My Feeling 5 💞",
        messageTitle: "I Want You In My Life 🌹",
        message:
            "குளத்தில் சிக்கிய மீனைப் போல்..! 🐬💗 " +
            "உன் அழகில் சிக்கி தவிக்கிறேன்..!! 💝💫"
    },

    {
        image: "photo106.jpg",
        heading: "My Feeling 6 💍",
        messageTitle: "The Feeling I Can't Hide ❤️",
        message:
            "சீதையை பார்க்கும்போதெல்லாம் மனதில் பாரம் கூடுதே..! ❤️‍🩹 " +
            "விரைவில் பாரம் குறைய என்ன செய்வேனோ உன்னிடத்தில்..!! 🤗"
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

const heartsContainer =
    document.getElementById("heartsContainer");


/* =====================================================
   CANVAS
   ===================================================== */

const ctx =
    scratchCanvas.getContext("2d");


/* =====================================================
   VARIABLES
   ===================================================== */

let currentMemory = 0;

let drawing = false;

let memoryRevealed = false;

let scratchedPixels = 0;

let totalScratchPixels = 0;

let selectedAnswer = "";

let alreadySubmitted = false;


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

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   OPEN MY HEART
   ===================================================== */

openBtn.addEventListener(
    "click",
    async () => {

        currentMemory = 0;

        /* MUSIC */

        if (bgMusic) {

            bgMusic.volume = 0.45;

            try {

                await bgMusic.play();

            } catch (error) {

                console.log(
                    "Music waiting for user interaction."
                );

            }
        }

        showScreen(memoryScreen);

        loadMemory();
    }
);


/* =====================================================
   LOAD MEMORY
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

    memoryRevealed =
        false;

    drawing =
        false;

    scratchedPixels =
        0;

    scratchCanvas.style.pointerEvents =
        "auto";

    /*
     * Wait for image/container size
     */

    requestAnimationFrame(() => {

        setupScratch();

    });
}


/* =====================================================
   SETUP SCRATCH CANVAS
   ===================================================== */

function setupScratch() {

    const rect =
        scratchCanvas.getBoundingClientRect();

    const width =
        Math.floor(rect.width);

    const height =
        Math.floor(rect.height);

    if (
        width <= 0 ||
        height <= 0
    ) {

        setTimeout(
            setupScratch,
            100
        );

        return;
    }


    /*
     * High DPI support
     */

    const dpr =
        Math.min(
            window.devicePixelRatio || 1,
            2
        );


    scratchCanvas.width =
        width * dpr;

    scratchCanvas.height =
        height * dpr;


    ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
    );


    ctx.globalCompositeOperation =
        "source-over";


    /* =================================================
       SCRATCH COVER
       ================================================= */

    const gradient =
        ctx.createLinearGradient(
            0,
            0,
            width,
            height
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
        width,
        height
    );


    /* =================================================
       COVER TEXT
       ================================================= */

    ctx.fillStyle =
        "rgba(255,255,255,0.95)";


    ctx.textAlign =
        "center";

    ctx.textBaseline =
        "middle";


    const fontSize =
        Math.max(
            16,
            width * 0.055
        );


    ctx.font =
        `bold ${fontSize}px Arial`;


    ctx.fillText(
        "Scratch To Reveal ❤️",
        width / 2,
        height / 2
    );


    /*
     * Approximate pixel count.
     */

    totalScratchPixels =
        width * height;

}


/* =====================================================
   GET POINTER POSITION
   ===================================================== */

function getPosition(event) {

    const rect =
        scratchCanvas.getBoundingClientRect();


    let clientX;
    let clientY;


    if (
        event.touches &&
        event.touches.length > 0
    ) {

        clientX =
            event.touches[0].clientX;

        clientY =
            event.touches[0].clientY;

    } else {

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
   SCRATCH FUNCTION
   ===================================================== */

function scratch(event) {

    if (!drawing)
        return;

    if (memoryRevealed)
        return;


    const pos =
        getPosition(event);


    /*
     * Erase scratch area
     */

    ctx.globalCompositeOperation =
        "destination-out";


    ctx.beginPath();


    ctx.arc(
        pos.x,
        pos.y,
        38,
        0,
        Math.PI * 2
    );


    ctx.fill();


    /*
     * Increase scratch amount
     */

    scratchedPixels +=
        Math.PI * 38 * 38;


    /*
     * Reveal after approximately
     * 30% scratch coverage.
     */

    const percentage =
        (
            scratchedPixels /
            totalScratchPixels
        ) * 100;


    if (
        percentage >= 30
    ) {

        revealMemory();

    }
}


/* =====================================================
   MOUSE EVENTS
   ===================================================== */

scratchCanvas.addEventListener(
    "mousedown",
    event => {

        event.preventDefault();

        drawing = true;

        scratch(event);
    }
);


scratchCanvas.addEventListener(
    "mousemove",
    scratch
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
    event => {

        event.preventDefault();

        drawing = false;

    },
    {
        passive: false
    }
);


/* =====================================================
   REVEAL MEMORY
   ===================================================== */

function revealMemory() {

    if (memoryRevealed)
        return;


    memoryRevealed =
        true;


    /*
     * Clear scratch cover
     */

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


    /*
     * Show message
     */

    setTimeout(() => {

        specialMessage.classList.add(
            "show"
        );

        nextBtn.classList.add(
            "show"
        );

    }, 200);


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
         * All 6 completed
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
   YES BUTTON
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
            "என் மனதில் இருக்கும் தேகத்தை உன்னிடத்தில் கொடுத்துள்ளேன் 🤍" + 
            "உன் மனதில் இருக்கிறதை என்னிடம் சொல்லு. ❤️";


        openFeedback();

        createHeartBurst();

    }
);


/* =====================================================
   NO BUTTON
   ===================================================== */

noBtn.addEventListener(
    "click",
    () => {

        selectedAnswer =
            "NO 😭💔";


        feedbackEmoji.textContent =
            "💌";


        feedbackTitle.textContent =
            "Your For Being Honest ❤️";


        feedbackDescription.textContent =
            "உன் answer-க்காக நான் wait பண்ணுறேன். 😍"


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


    feedback.focus();

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

        submitStatus.textContent =
            "";


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
                    "Formspree submission failed"
                );
            }


            alreadySubmitted =
                true;


            /* =========================================
               YES RESPONSE
               ========================================= */

            if (
                selectedAnswer
                    .startsWith("YES")
            ) {

                thankMessage.innerHTML =
                    "உன் விருப்பமத்தில், beautiful moment என் heart-ல " +
                    "special-ஆ இருக்கும்னு நினைக்கிறேன்.💍💕";

            }


            /* =========================================
               NO RESPONSE
               ========================================= */

            else {

                thankMessage.innerHTML =
                    "உன் answer எனக்கு முக்கியம். ❤️" 

            }


            showScreen(
                thankYouScreen
            );


            createHeartBurst();

        }


        catch (error) {

            console.error(
                "Formspree Error:",
                error
            );


            submitStatus.textContent =
                "Something went wrong. Please try again. 😔";


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

    if (!heartsContainer)
        return;


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
        (
            15 +
            Math.random() * 20
        ) + "px";


    heart.style.animationDuration =
        (
            5 +
            Math.random() * 5
        ) + "s";


    heartsContainer.appendChild(
        heart
    );


    setTimeout(
        () => {

            heart.remove();

        },
        10000
    );
}


/* =====================================================
   CONTINUOUS FLOATING HEARTS
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


/* =====================================================
   WINDOW RESIZE
   ===================================================== */

window.addEventListener(
    "resize",
    () => {

        /*
         * Don't rebuild scratch canvas
         * after user has started scratching.
         */

        if (
            !memoryRevealed &&
            memoryScreen.classList.contains("active")
        ) {

            setupScratch();

        }

    }
);
