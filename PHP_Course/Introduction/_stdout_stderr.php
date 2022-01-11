<!-- SOURCE** https://dev.to/iggredible/what-does-2-1-mean-290 -->

stdout (> or 1>)--You get the same functionality using 1> as with >
    #cat filedoesntexist > result.txt
    #cat: filedoesntexist: No such file or directory       //throws error
    #cat result.txt

stderr (< or 2>)--You get the same functionality using 2> as with <
    #cat filedoesntexist 2> result.txt
    #cat result.txt                                       //don't throws error but shows error message after creating file
    #cat: filedoesntexist: No such file or directory

<!-- In short: -->

    >ls myDir > result.txt 2> result.txt
                OR                  
    > ls myDir > result.txt 2>&1
    
    
    This will redirect stdout and stderr from running ls myDir to result.txt. This way, if myDir exists, it will redirect the output to result.txt and if myDir doesn't exist, it will redirect the error message to result.txt. User will not see any output whether the command works or not. It's a win-win.



