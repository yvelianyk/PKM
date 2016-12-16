#!/usr/bin/env bash
###############################################
#
# Automatically running client. Also, this
# script run server watchers for file changes.
# Developer must run server manually
# in IDE for debugging.
#
# Notes:
# For developing purposes only.
#
##############################################

gnome-terminal  \
    --tab -e "bash -c 'sudo service mongod start'" \
    --tab -e "bash -c 'cd ./client && npm start'" \
    --tab -e "bash -c 'cd ./server && npm run dev'" \
    --tab

exit 0