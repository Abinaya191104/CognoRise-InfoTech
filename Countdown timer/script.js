function startTimer() {
    var birthdayInput = document.getElementById('birthday').value;
    var birthdayDate = new Date(birthdayInput);
    var now = new Date();

    // Calculate the time difference in seconds
    var diffSeconds = Math.floor((birthdayDate - now) / 1000);

    // If the birthday is in the past, calculate for next year
    if (diffSeconds < 0) {
        birthdayDate.setFullYear(birthdayDate.getFullYear() + 1);
        diffSeconds = Math.floor((birthdayDate - now) / 1000);
    }

    var countdownTimer = setInterval(function() {
        if (diffSeconds <= 0) {
            clearInterval(countdownTimer);
            document.getElementById('timer').textContent = "Happy Birthday!";
        } else {
            var daysLeft = Math.floor(diffSeconds / (60 * 60 * 24));
            var hoursLeft = Math.floor((diffSeconds % (60 * 60 * 24)) / (60 * 60));
            var minutesLeft = Math.floor((diffSeconds % (60 * 60)) / 60);
            var secondsLeft = diffSeconds % 60;

            document.getElementById('days').textContent =daysLeft <10 ? '0' +daysLeft : daysLeft;
            document.getElementById('hours').textContent =hoursLeft <10 ? '0' +hoursLeft : hoursLeft;
            document.getElementById('minutes').textContent =minutesLeft <10 ? '0' +minutesLeft : minutesLeft;
            document.getElementById('seconds').textContent = secondsLeft <10 ? '0' +secondsLeft : secondsLeft;

            diffSeconds--;
        }
    }, 1000);
}
