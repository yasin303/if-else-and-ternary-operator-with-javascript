let name = 'Ardian';
let score = 100;

// code here
let grade;
if (score < 0 || score > 100) {  //condition when score is between 0 and 100
    console.log("your score Invalid");  //result when score do not match
} else {
    if (score >= 80) {  //condition when the score of A is more than 80
        grade = "A";
    } else if (score >= 70) {  //condition when the score of B is more than 70
        grade = "B";
    } else if (score >= 50) {  //condition when the score of C is more than 50
        grade = "C";
    } else if (score >= 35) {  //condition when the score of D is more than 35
        grade = "D";
    } else {
        grade = "E";  //condition when the score is other than the condition above, with a range of 0 to 100
    }
    console.log("name: " + name + "; score: " + grade);
}
