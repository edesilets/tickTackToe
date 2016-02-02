#!/bin/bash

TOKEN='b726d03d534daa2a05a879ef3a93c3f3'
USER_ID='7'
OLD_PW='anpassword'
NEW_PW='defcon'

BASE_URL="http://tic-tac-toe.wdibos.com"
URL="${BASE_URL}/change-password/${USER_ID}"

url() {

  CONTENT_TYPE="application/x-www-form-urlencoded"

  curl ${URL}\
  --include \
  --request PATCH \
  --header "Content-Type: ${CONTENT_TYPE}" \
  --header "Authorization: Token token=${TOKEN}" \
  --data-urlencode "passwords[old]=${OLD_PW}" \
  --data-urlencode "passwords[new]=${NEW_PW}"
}


json() {

  CONTENT_TYPE="application/json"

  curl ${URL}\
  --silent \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  #how to do this correctly?
  --data "{
      \"credentials\": {
      \"email\": \"${EMAIL}\",
      \"password\": \"${PASSWORD}\"
    }
  }"

}

url

# data output from curl doesn't have a trailing newline
echo
