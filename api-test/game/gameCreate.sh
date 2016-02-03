#!/bin/bash

EMAIL='test@test.j'
PASSWORD='defcon'
TOKEN='377d8f585fa658fb7c196d3ffb1b1306'
ID='7'

BASE_URL="http://tic-tac-toe.wdibos.com"
URL="${BASE_URL}/games"
#URL="http://httpbin.org/post"

url() {
  # CONTENT_TYPE="application/x-www-form-urlencoded"
  #
  # curl ${URL} \
  # --silent \
  # --request POST \
  # --header "Content-Type: ${CONTENT_TYPE}" \
  # --data-urlencode "credentials[email]=${EMAIL}" \
  # --data-urlencode "credentials[password]=${PASSWORD}"
  echo
}

json() {
  CONTENT_TYPE="application/json"

  curl ${URL} \
  --include \
  --request POST \
  --header "Content-Type: ${CONTENT_TYPE}" \
  --header "Authorization: Token token=${TOKEN}" \
  --data  "{
    \"game\": {
      \"cells\": [\"x\",\"x\",\"x\",\"x\",\"x\",\"x\",\"x\",\"x\",\"x\"],
      \"player_x\": {
        \"id\": ${ID},
        \"email\": \"${EMAIL}\"
      },
      \"player_o\": null
    }
  }"
}

#sample data from return....
#{"game":{"id":4,"cells":["","","","","","","","",""],"over":false,"player_x":{"id":7,"email":"test@test.j"},"player_o":null}}
#{"game":{"id":5,"cells":["","","","","","","","",""],"over":false,"player_x":{"id":7,"email":"test@test.j"},"player_o":null}}
#{"game":{"id":6,"cells":["","","","","","","","",""],"over":false,"player_x":{"id":7,"email":"test@test.j"},"player_o":null}}
#{"game":{"id":7,"cells":["","","","","","","","",""],"over":false,"player_x":{"id":7,"email":"test@test.j"},"player_o":null}}
#end of Sample Data.
json

echo
