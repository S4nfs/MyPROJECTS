let arr = [2, 3, 4, 6, 8];
let outarr = arr.map((outpitelement) => {                               //👉 Can be written In Single line: 
    return outpitelement * 2;                            
}).filter((finalelement) => {
    return finalelement > 10;
})
// 👇Single line: (using => instead of return)
// let outarr = arr.map((outpitelement) => outpitelement * 2).filter((finalelement) => finalelement > 10);
console.log(outarr);