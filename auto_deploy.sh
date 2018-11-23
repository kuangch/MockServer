#!/bin/bash

# change directory according your physical truth
gitDir="/opt/repos/MockServer"

echo -e "\033[32m [AUTO SYNC] sync demo start \033[0m"
cd $gitDir
echo -e "\033[32m [AUTO SYNC] git pull...  \033[0m"
git pull

# echo -e "\033[32m [AUTO SYNC] checkout code to web tree... \033[0m"
# git --work-tree=$deployPath --git-dir=$repoDir checkout -f

echo -e "\033[32m [AUTO SYNC] npm install... \033[0m"
npm install

echo -e "\033[32m [AUTO SYNC] restart... \033[0m"
pm2 restart pm2.json

echo -e "\033[32m [AUTO SYNC] sync demo finish \033[0m"
