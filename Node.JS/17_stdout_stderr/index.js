const {exec} = require('child_process');
exec('ping www.google.com', (err, stdout, stderr) => {
    if (err) {
        console.error(`error ${err.message}`);
        return;
    }if(stderr){
        console.error(`stderr ${stderr}`);
        return;
    }
    console.log(`stdout ${stdout}`);
}
)


        



        /*err -the command not found or have missing arguments

        stderr - the command has been executed but there has been some error inside the terminal

        stdout - the output of the command */