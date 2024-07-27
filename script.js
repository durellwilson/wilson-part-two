let username = prompt(`Please enter your username:`);
console.log(username);
let holes = prompt(`Welcome, ${username}! Would you like to play 3 or 6 holes?`);
console.log(holes);
if (holes === "3") {
    let score = 0;
    for (let i = 1; i <= 3; i++) {
        let putts = prompt(`How many putts for hole ${i}? (par: 3)`);
        score += parseInt(putts);
        console.log(putts);
    }
    let totalPar = -(9 - score);
    if (totalPar === 0) {
        alert(`Good game, ${username}. Your total par was: ${totalPar}`);
        console.log(`Good game, ${username}. Your total par was: ${totalPar}`);
    } 
    if (totalPar > 0) {
        alert(`Nice try, ${username}. Your total par was: ${totalPar}`);
        console.log(`Nice try, ${username}. Your total par was: ${totalPar}`);
    }
    if (totalPar < 0) {
        alert(`Great job, ${username}. Your total par was: ${totalPar}`);
        console.log(`Great job, ${username}. Your total par was: ${totalPar}`);
    }
} 
if (holes === "6") {
    let score = 0;
    for (let i = 1; i <= 6; i++) {
        let putts = prompt(`How many putts for hole ${i}? (par: 3)`);
        score += parseInt(putts);
        console.log(putts);
    }
    let totalPar = -(18 - score);
    if (totalPar === 0) {
        alert(`Good game, ${username}. Your total par was: ${totalPar}`);
        console.log(`Good game, ${username}. Your total par was: ${totalPar}`);
    } 
    if (totalPar > 0) {
        alert(`Nice try, ${username}. Your total par was: ${totalPar}`);
        console.log(`Nice try, ${username}. Your total par was: ${totalPar}`);
    }
    if (totalPar < 0) {
        alert(`Great job, ${username}. Your total par was: ${totalPar}`);
        console.log(`Great job, ${username}. Your total par was: ${totalPar}`);
    }
} 