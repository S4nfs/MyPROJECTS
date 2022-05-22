#!/bin/bash

set -eu -o pipefail # fail on error and report it, debug all lines

sudo -n true
test $? -eq 0 || exit 1 "you should have sudo privilege to run this script"

echo installing the must-have pre-requisites
while read -r p ; do sudo apt-get install -y $p ; done < <(cat << "EOF"
    zip unzip
    apache2 
    mysql-server 
    php libapache2-mod-php 
    php-mysql 
    php-xml 
    php-libvirt-php
    curl
    wget
EOF
)
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
apt install nodejs

#Configuring files and permissions
echo "Configuring files and permissions..."
#Add user to libvirt group
# adduser www-data libvirtd
cd /var/www/html
# echo "Downloading the latest version of arclight..."
# wget https://github.com/Chatnaut/Arclight/archive/refs/tags/v1.0.0.tar.gz
# echo "Extracting the archive..."
# tar -xvzf v1.0.0.tar.gz
# mv Arclight-1.0.0 arclight
# chown -R www-data:www-data /var/www/html

#Setup PM2 process manager to keep your app running
git clone https://github.com/S4nfs/ArclightAPI.git
cd ArclightAPI
npm i pm2 -g
npm install
pm2 start app.js

# To make sure app starts when reboot
pm2 startup

#Create database
echo "Creating new database..."
	echo "Enter database name!"
	read dbname
    
	mysql -e "CREATE DATABASE ${dbname} /*\!40100 DEFAULT CHARACTER SET utf8 */;"
	echo "Database successfully created!"
	
	echo "Enter database user!"
	read username
    
	echo "Enter the PASSWORD for database user!"
	echo "Note: password will be hidden when typing"
	read -s userpass
    
	echo "Creating new user..."
	mysql -e "CREATE USER ${username}@localhost IDENTIFIED BY '${userpass}';"
	echo "User successfully created!"

	echo "Granting ALL privileges on ${dbname} to ${username}!"
	mysql -e "GRANT ALL PRIVILEGES ON ${dbname}.* TO '${username}'@'localhost';"
	mysql -e "FLUSH PRIVILEGES;"
	echo "You're good now :)"

echo -e "\n"
cat << "EOF"

       
.--------------.    
|   Finished!  |         |          /\  ._ _ | o  _  |_ _|_ 
'--------------'         |         /--\ | (_ | | (_| | | |_ 
      ^      (\_/)       |                        _|            
      '----- (O.o)       |  You can now access the web interface at:
             (> <)       |  http://ip-address-of-machine/arclight/

EOF
#reboot the server to apply changes
echo "The hypervisor needs to be rebooted in order to load the necessary packages. Do you want to reboot now? (y/n/maybe)"
read reboot
if [ $reboot = "y" ]
then
    echo "Rebooting the server..."
    sleep 6
    reboot
else
    echo "Restarting only the required services in order to apply changes..."
    sleep 3
    service apache2 restart
    service mysql restart
    echo "Bye!"
    exit 0
fi
