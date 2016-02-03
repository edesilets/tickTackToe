#!/bin/bash

#EMAIL='test@test.j'
#PASSWORD='defcon'
TOKEN='377d8f585fa658fb7c196d3ffb1b1306'
GAMEID='2'

BASE_URL="http://tic-tac-toe.wdibos.com"
URL="${BASE_URL}/games/${GAMEID}"
#URL="http://httpbin.org/post"

url() {
  CONTENT_TYPE="application/x-www-form-urlencoded"

  curl ${URL}\
  --silent \
  --request GET \
  --header "Content-Type: ${CONTENT_TYPE}" \
  --header "Authorization: Token token=${TOKEN}"
  echo
}

json() {
  CONTENT_TYPE="application/json"

  curl ${URL}\
  --include \
  --request GET \
  --header "Content-Type: ${CONTENT_TYPE}" \
  --header "Authorization: Token token=${TOKEN}"
}

json

echo
