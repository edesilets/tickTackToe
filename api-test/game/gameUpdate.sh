#!/bin/bash

EMAIL='test@test.j'
#PASSWORD='defcon'
USERID='7'
TOKEN='377d8f585fa658fb7c196d3ffb1b1306'
GAMEID='5'

BASE_URL="http://tic-tac-toe.wdibos.com"
URL="${BASE_URL}/games/${GAMEID}"
#URL="http://httpbin.org/post"

url() {
  CONTENT_TYPE="application/x-www-form-urlencoded"

  curl ${URL}\
  --silent \
  --request PATCH \
  --header "Content-Type: ${CONTENT_TYPE}" \
  --header "Authorization: Token token=${TOKEN}"
  echo
}

json() {
  CONTENT_TYPE="application/json"

  curl ${URL}\
  --silent \
  --request PATCH \
  --header "Content-Type: ${CONTENT_TYPE}" \
  --header "Authorization: Token token=${TOKEN}" \
  --data "{
  \"game\": {
    \"cells\": [\"X\",\"X\",\"X\",\"X\",\"O\",\"O\",\"O\",\"O\",\"O\"],
    \"over\":true,
  }
}"
}


# "{
# \"game\": {
#   \"id\": 1,
#   \"cells\": [\"X\",\"X\",\"X\",\"X\",\"O\",\"O\",\"O\",\"O\",\"O\"],
#   \"over\":false,
#   \"player_x\": {
#     \"id\": \"${USERID}\",
#     \"email\": \"${EMAIL}\"
#     },
#   \"player_o\": {
#     \"id\": \"${USERID}\",
#     \"email\": \"${EMAIL}\",
#   }
# }


json

echo
