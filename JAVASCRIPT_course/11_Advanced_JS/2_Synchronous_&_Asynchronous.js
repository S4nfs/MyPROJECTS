/*✔️ Synchronous Program do everything in order--------------------------------------------------------------------------------------
1work = 10min                  1
2work = 5sec                   2
*/

const fun2 = () => {
    console.log('2');
}
const fun1 = () => {
    console.log('1');
    fun2();
    console.log('1 is called again');
}
fun1();

/* Asynchronous Program = Kaam rukna nhi chahiye---------------------------------------------------------------------------------------
1work = 10min                  2
2work = 5sec                   1
*/

const fun2 = () => {
    setTimeout(() => {
        console.log('2');
    }, 3000);
}
const fun1 = () => {
    console.log('1');
    fun2();
    console.log('1 is called again');
}
fun1();
