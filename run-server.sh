#!/usr/bin/env bash
###########################################
#
# Automatically running client and
# server with installing all dependencies.
#
# Notes:
# For demo purposes only.
#
###########################################

gnome-terminal  \
    --tab -e "bash -c 'sudo service mongod start'" \
    --tab -e "bash -c 'cd ./client && npm start'" \
    --tab -e "bash -c 'cd ./server && npm start'" \
    --tab

exit 0