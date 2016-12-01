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
    --tab -e "bash -c 'cd ~/PKM/client && npm start'" \
    --tab -e "bash -c 'cd ~/PKM/server && npm start'" \
    --tab

exit 0