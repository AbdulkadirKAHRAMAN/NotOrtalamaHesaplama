const grades = [];
const numberOfNotes = Number(prompt("Kaç adet not girmek istersiniz?"));

noteQuery();
gpa();

function noteCheck(msg) {
    const value = Number(prompt(msg));
    if (value > 100 || value < 0 || isNaN(value)) {
        alert("Geçersiz değer, yeniden deneyin.");
        return noteCheck(msg); 
    }
    return value; 
}

function noteQuery() {
    for (let index = 0; index < numberOfNotes; index++) {
        const grade = noteCheck(`${index + 1}. Notunuzu giriniz:`);
        grades.push(grade); 
        console.log(grades);  
    }
}

function gpa() {
    const sum = grades.reduce((total, num) => total + num, 0); 
    const average = sum / grades.length; 

    if (average >= 90) {
        console.log(`Not Harfiniz: A Notunuz: ${average.toFixed(2)}`);
    } else if (average >= 80) {
        console.log(`Not Harfiniz: B Notunuz: ${average.toFixed(2)}`);
    } else if (average >= 70) {
        console.log(`Not Harfiniz: C Notunuz: ${average.toFixed(2)}`);
    } else if (average >= 60) {
        console.log(`Not Harfiniz: D Notunuz: ${average.toFixed(2)}`);
    } else {
        console.log(`Not Harfiniz: F Notunuz: ${average.toFixed(2)}`);
    }
}
