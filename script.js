function checkAnswer(correct) {
    const result = document.getElementById("result");

    if (correct) {
        result.innerHTML = "✅ Correct! Never share your OTP with anyone.";
        result.style.color = "green";
    } else {
        result.innerHTML = "❌ Wrong! OTP should never be shared.";
        result.style.color = "red";
    }
}

// Smooth scrolling
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});
