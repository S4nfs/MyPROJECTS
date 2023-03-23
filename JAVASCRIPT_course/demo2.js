function multiply(a, b, n) {
    //code here
    let m = [];
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            let sum = 0;
            for (let k = 0; k < n; k++) {
                sum = sum + a[r][k] * b[k][c];
            }
            // process.stdout.write(sum + " ");
            m.push(sum);
        }
    }
    // process.stdout.write("\n");
    console.log(...m);

}

console.log(multiply([[7, 8], [2, 9]], [[14, 5], [5, 18]], 2))