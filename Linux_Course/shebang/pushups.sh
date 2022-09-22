#! /bin/bash
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

set -e

if cat /etc/*release | grep ^NAME | grep CentOS; then
    echo "==============================================="
    echo "Installing packages  on CentOS"
    echo "==============================================="
    # yum install -y $YUM_PACKAGE_NAME
elif cat /etc/*release | grep ^NAME | grep Red; then
    echo "==============================================="
    echo "Installing packages  on RedHat"
    echo "==============================================="
    # yum install -y $YUM_PACKAGE_NAME
elif cat /etc/*release | grep ^NAME | grep Fedora; then
    echo "================================================"
    echo "Installing packages  on Fedorea"
    echo "================================================"
    # yum install -y $YUM_PACKAGE_NAME
elif cat /etc/*release | grep ^NAME | grep Ubuntu; then
    echo "==============================================="
    echo "Installing packages  on Ubuntu"
    echo "==============================================="
    # apt-get update
    # apt-get install -y
elif cat /etc/*release | grep ^NAME | grep Debian; then
    echo "==============================================="
    echo "Installing packages on Debian"
    echo "==============================================="
    # apt-get update
    # apt-get install -y
elif cat /etc/*release | grep ^NAME | grep Mint; then
    echo "============================================="
    echo "Installing packages  on Mint"
    echo "============================================="
    # apt-get update
    # apt-get install -y
elif cat /etc/*release | grep ^NAME | grep Knoppix; then
    echo "================================================="
    echo "Installing packages  on Kanoppix"
    echo "================================================="
    # apt-get update
    # apt-get install -y $DEB_PACKAGE_NAME
else
    echo "OS NOT DETECTED, couldn't install package"
    exit 1
fi

exit 0

----------------------------------
if [ "$(grep -Ei 'debian|ubuntu' /etc/*release)" ]; then
    # do stuff
elif [ "$(grep -Ei 'rhel|fedora|centos' /etc/*release)" ]; then
    yum install edk2-ovmf
else
    exit 1
fi
