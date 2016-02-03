#!/bin/bash

TOKEN='c1c5d25a2fdc7c2c87cff12cd317eaf9'
USER_ID='7'

BASE_URL="http://tic-tac-toe.wdibos.com"
URL="${BASE_URL}/sign-out/${USER_ID}"

curl ${URL}\
--silent \
--request DELETE \
--header "Authorization: Token token=${TOKEN}"

# data output from curl doesn't have a trailing newline
echo
