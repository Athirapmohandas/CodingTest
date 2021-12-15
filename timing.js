var A = [12, 14, 13], B = [10, 16, 13, 12];
var scoreA = 0, scoreB = 0;

for (i = 0; i < A.length; i++) {
    for (j = i; j < B.length; j++) {
        if (A[i] == B[j]) {
            break;
        }
        else if (A[i] < B[j]) {
            scoreA += 10;
            scoreB -= 2;
            break;
        }
        else {
            scoreB += 10;
            scoreA -= 2;
            break;
        }
    }

}

if (A.length > B.length) {
    scoreA += 10;
    scoreB -= 2;
}
else {
    scoreB += 10;
    scoreA -= 2;
}
console.log(`score of A :${scoreA} score of B:${scoreB}`);
