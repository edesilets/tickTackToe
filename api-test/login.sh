#!/bin/bash

EMAIL='test@test.j'
PASSWORD='anpassword'

BASE_URL="http://tic-tac-toe.wdibos.com"
URL="${BASE_URL}/sign-in"

url() {
  CONTENT_TYPE="application/x-www-form-urlencoded"

  curl ${URL}\
  --silent \
  --request POST \
  --header "Content-Type: ${CONTENT_TYPE}" \
  --data-urlencoded "crendentials[email]=${EMAIL}"\
  --data-urlencoded "crendentials[password]=${PASSWORD}"
}

json() {
  CONTENT_TYPE="application/json"

  curl ${URL}\
  --silent \
  --request POST \
  --header "Content-Type: ${CONTENT_TYPE}" \
  --data "{
      \"credentials\": {
      \"email\": \"${EMAIL}\",
      \"password\": \"${PASSWORD}\"
    }
  }"

}

json

echo
