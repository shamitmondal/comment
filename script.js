function firstYes() {
    document.getElementById("question").innerText = "Are you sure?";
    document.getElementById("buttons").innerHTML = `
        <button class="yes" onclick="secondYes()">Yes</button>
        <button class="no" onclick="secondNo()">No</button>
    `;
}

function firstNo() {
    document.getElementById("question").innerText =
        "Thank you for your honesty. Please go back, this message is not for you.";
    document.getElementById("buttons").style.display = "none";
}

function secondNo() {
    document.getElementById("question").innerText =
        "You are a liar. Please go back. This message is not for you.";
    document.getElementById("buttons").style.display = "none";
}

function secondYes() {
    document.getElementById("buttons").style.display = "none";
    document.getElementById("codeBox").style.display = "block";
}

function checkCode() {
    const code = document.getElementById("codeInput").value;

    if (code === "23022009") {
        document.getElementById("question").innerText = "Yes, you are real ❤️";
        document.getElementById("codeBox").style.display = "none";

        const msg = document.getElementById("message");
        msg.classList.remove("hidden");
        msg.classList.add("popup", "typewriter");

        

        const text =
            "আমি জানি তোমার নিজের প্রসংশা শুনতে খুব একটা ভালো লাগে না | " +
            "আর মজার কথা হচ্ছে বাকি দের মতো আমি খুব ভালোভাবে মিথ্যা প্রসংশা করতে করতে পারি না | " +
            "কিন্তু কথাটা হচ্ছে ma'am তোমাকে দেখতে সত্যিই খুব সুন্দর লাগছে | " +
            "কি লিখলাম আর বললাম নিজেও জনি না | " +
            "অনেক অনেক ভালো থাকো , সুস্থ থাকো ||";

        typeWriterEffect(msg, text, 40);
    } else {
        alert("You are fake. Go back.");
    }
}



/* 🎉 Fuljhuri / Confetti Effect */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function startConfetti() {
    for (let i = 0; i < 200; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * 10 + 5,
            color: `hsl(${Math.random() * 360}, 100%, 70%)`
        });
    }
    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach((c, i) => {
        ctx.beginPath();
        ctx.fillStyle = c.color;
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fill();

        c.y += c.d;
        if (c.y > canvas.height) {
            confetti[i].y = -10;
        }
    });

    requestAnimationFrame(animateConfetti);
}
function typeWriterEffect(element, text, speed) {
    let i = 0;
    element.innerText = "";

    function typing() {
        if (i < text.length) {
            element.innerText += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}
