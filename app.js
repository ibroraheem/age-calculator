function age() {

    let birthDay = document.getElementById('date').value;
    let birthMonth = document.getElementById('month').value;
    let birthYear = document.getElementById('year').value;
    let date = new Date();
    let currentDate = date.getDate();
    let currentMonth = 1 + date.getMonth();
    let currentYear = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (birthDay > currentDate) {
        currentDate = currentDate + month[2] - 1;
        currentMonth = currentMonth - 1;
    }

    if (birthMonth > currentMonth) {
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
    }

    let d = currentDate - birthDay;
    let m = currentMonth - birthMonth;
    let y = currentYear - birthYear;

    document.getElementById('age').innerHTML = 'Your Age is ' + y + ' Years ' + m + ' Months ' + d + ' Days';
}