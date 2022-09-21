#! /bin/bash

#🐹 print----------------------------------------------------------------------------------------------------------------------------
echo "Hello World"
sleep 1

#🐹Single-Line Comment---------------------------------------------------------------------------------------------------------------
: '
Multi-line Comment
Multi-line Comment
Multi-line Comment
Multi-line Comment
Multi-line Comment'

#🐹 variables------------------------------------------------------------------------------------------------------------------------
a=Welcometoshebang
echo $a

#🐹 Expressions----------------------------------------------------------------------------------------------------------------------
add=$((3 + 7))
echo $add

divide=$((22 / 7))
echo $divide

#🐹 Read user input------------------------------------------------------------------------------------------------------------------
echo "Enter your name"
read name
echo "Your name is "$name

# +-------------------------+------------------+
#        Operation          |     Syntax       |
# +-------------------------+------------------+
#  Greater than             | num1 -gt num2    |
# +---------+---------------+------------------+
#  Greater than equal to    | num1 -ge num2    |
# +---------+---------------+------------------+
#  Less than                | num1 -lt num2    |
# +---------+---------------+------------------+
#  Less than equal to       | num1 -le num2    |
# +---------+---------------+------------------+
#  Equality                 | num1 -eq num2    |
# +---------+---------------+------------------+
#  Not Equal to             | num1 -ne num2    |
# +-------------------------+------------------+

echo "Number 1"
read x
echo "Number 2"
read y

if [ $x -lt $y ]; then #same can be written as: if (( $x < $y ))
    echo $x " is less than " $y
elif [ $x -gt $y ]; then
    echo $x " is greater than " $y
elif [ $x -eq $y ]; then
    echo $x " is equal to " $y
elif [ $x -ne $y ]; then
    echo $x " is not equal to " $y
else
    echo "Invalid input"
fi

#🐹 loops For, While(while it is true), until(until it is true)----------------------------------------------------------------------
#for loop using range
for i in {1..5}; do
    echo $i
done

#while loop
x=1
while [[ $x -le 10 ]]; do
    echo "Hey, I just did $x pushups"
    ((x++))
done

#is my server down----------------------
echo "Enter Server Name/IP"
read target

while true; do
    if ping -q -c 2 -W 1 $target >/dev/null; then
        echo "You're UP!!"
        break
    else
        echo "$target is currently DOWN!!"
    fi
    sleep 1
done

#until loop - just the opposite of while
x=1
until [[ $x -gt 10 ]]; do
    echo "Hey, I will do pushups until $x"
    ((x++))
done

#weather--------------------------------
for x in $(cat cities.txt); do
    weather=$(curl -s https://wttr.in/$x?format=3)
    echo "The weather for $weather"
done

#🐹 Flags

helpFunction() {
    echo ""
    echo "Usage: $0 -a parameterA -b parameterB -c parameterC"
    echo -e "\t-u Enter your username"
    echo -e "\t-a Enter your age"
    echo -e "\t-p Enter your profession"
    exit 1 # Exit script after printing help
}

while getopts u:a:p: myflag; do
    case "${myflag}" in
    u) username=${OPTARG} ;;
    a) age=${OPTARG} ;;
    p) profession=${OPTARG} ;;
    ?) helpFunction ;; # Print helpFunction in case parameter is non-existent
    esac
done

if [ -z "$username" ] || [ -z "$age" ] || [ -z "$profession" ]; then # Print helpFunction in case parameters are empty
    echo "Some or all of the parameters are empty"
    helpFunction
fi

echo "Username: $username" #./bash.sh -u Sagar -a 23 -p Software Engineer
echo "Age: $age"
echo "Profession: $profession"

#🐹 Stdout and Stdin---------------------------------------------------------------------------------------------------------------------
# 0 = Stdin
# 1 = Stdout
# 2 = Stderr

ls -al 1>fileOut.txt 2>fileErr.txt #redirecting stdout and stdin in different files
ls -al >logs.txt 2>&1              #redirecting stdout and stdin in same file

#🐹 Strings---------------------------------------------------------------------------------------------------------------------
#compare strings
echo "Enter first string"
read -r str1
echo "Enter second string"
read -r str2

if [ "$str1" \> "$str2" ]; then
    echo "$str1 is greater than $str2"
elif [ "$str1" \< "$str2" ]; then
    echo "$str1 is smaller than $str2"
else
    echo "Both are equal"
fi

#🐹 UpperCase & LowerCase---------------------------------------------------------------------------------------------------------
st=sAgaR
echo ${st,}           #first letter lowercase
echo ${st,,}          #all lowercase
echo ${st^}           #first letter uppercase
echo ${st^^}          #all uppercase
echo "${st^^[aeiou]}" #uppercase the following letters only

#🐹 Airthematic Operations---------------------------------------------------------------------------------------------------------
n1=20
n2=10
echo $((n1 + n2))
echo $((n1 - n2))
echo $((n1 * n2))
echo $((n1 / n2))
echo $((n1 % n2))

#🐹 Arrays--------------------------------------------------------------------------------------------------------------------------
car=('BMWm3' 'RangeRover' 'Mazda' 'FordFocus')
echo "${car[@]}"  #get all elements
echo "${car[2]}"  #get element by index
echo "${!car[@]}" #indexes 0,1,2,3
echo "${#car[@]}" #total indexes 4
unset "car[2]"    #remove element
car[2]="Tesla"    #add element
echo "${car[@]}"  #get all elements

#🐹 Functions-----------------------------------------------------------------------------------------------------------------------
function printArgs() {
    echo $1 $2 $3 $4 #number-wise
}

printArgs We are your arguments

#🐹 File system---------------------------------------------------------------------------------------------------------------------

mkdir -p goku.sh #create directory with -p to avoid stderr if dir already exists

echo "Enter Directory name" #check directory existence using -d flag and file using -f
read -r input
if [[ -d "$input" ]]; then
    echo "directory exists"
else
    echo "not exists"
fi

echo "Enter file name" #append in file
read -r fileName
if [[ -f "$fileName" ]]; then
    echo "Enter text u want to append"
    read filetxt
    echo "$filetxt" >>$fileName
else
    echo "$fileName doesn't exists"
fi

echo "Enter file name" #read from file line-by-line. IFS stands for Internal Field Separator By default, space, tab, and newline are considered as field separators but you can change it in your script as per your need
read -r fileName
if [[ -f "$fileName" ]]; then
    while IFS= read -r mylines; do
        echo "$mylines"
    done <"$fileName"
else
    echo "$fileName doesn't exists"
fi

#🐹 case---------------------------------------------------------------------------------------------------------------------

select car in BMW Tesla Mercedes Hundai Tata; do
    case $car in
    BMW)
        echo "test drive BMW"
        ;;
    Tesla)
        echo "test drive Tesla"
        ;;
    Mercedes)
        echo "test drive Mercedes"
        ;;
    Hundai)
        echo "test drive Hundai"
        ;;
    Tata)
        echo "test drive Tata"
        ;;
    *)
        echo "Error! Please select"
        ;;
    esac
done

#🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹------------------Some Bash Script Examples------------------🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹

#Below it's an approach to detect Debian and RedHat based Linux OS making use of the /etc/lsb-release and /etc/os-release (depending on the Linux flavor you're using) and take a simple action based on it.
set -e

YUM_PACKAGE_NAME="python python-devl python-pip openssl-devel"
DEB_PACKAGE_NAME="python2.7 python-dev python-pip libssl-dev"

if cat /etc/*release | grep ^NAME | grep CentOS; then
    echo "==============================================="
    echo "Installing packages $YUM_PACKAGE_NAME on CentOS"
    echo "==============================================="
    yum install -y $YUM_PACKAGE_NAME
elif cat /etc/*release | grep ^NAME | grep Red; then
    echo "==============================================="
    echo "Installing packages $YUM_PACKAGE_NAME on RedHat"
    echo "==============================================="
    yum install -y $YUM_PACKAGE_NAME
elif cat /etc/*release | grep ^NAME | grep Fedora; then
    echo "================================================"
    echo "Installing packages $YUM_PACKAGE_NAME on Fedorea"
    echo "================================================"
    yum install -y $YUM_PACKAGE_NAME
elif cat /etc/*release | grep ^NAME | grep Ubuntu; then
    echo "==============================================="
    echo "Installing packages $DEB_PACKAGE_NAME on Ubuntu"
    echo "==============================================="
    apt-get update
    apt-get install -y $DEB_PACKAGE_NAME
elif cat /etc/*release | grep ^NAME | grep Debian; then
    echo "==============================================="
    echo "Installing packages $DEB_PACKAGE_NAME on Debian"
    echo "==============================================="
    apt-get update
    apt-get install -y $DEB_PACKAGE_NAME
elif cat /etc/*release | grep ^NAME | grep Mint; then
    echo "============================================="
    echo "Installing packages $DEB_PACKAGE_NAME on Mint"
    echo "============================================="
    apt-get update
    apt-get install -y $DEB_PACKAGE_NAME
elif cat /etc/*release | grep ^NAME | grep Knoppix; then
    echo "================================================="
    echo "Installing packages $DEB_PACKAGE_NAME on Kanoppix"
    echo "================================================="
    apt-get update
    apt-get install -y $DEB_PACKAGE_NAME
else
    echo "OS NOT DETECTED, couldn't install package $PACKAGE"
    exit 1
fi

exit 0

#--------------------------------------------------------------------------------------------------------------------------------------
