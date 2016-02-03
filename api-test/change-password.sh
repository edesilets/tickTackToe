#!/bin/bash

TOKEN='047683a77458460dbd0065cafbfc0fa8'
USER_ID='7'
OLD_PW='defcon'
NEW_PW='password'

BASE_URL="http://tic-tac-toe.wdibos.com"
URL="${BASE_URL}/change-password/${USER_ID}"

url() {

  CONTENT_TYPE="application/x-www-form-urlencoded"

  curl ${URL}\
  --silent \
  --request PATCH \
  --header "Content-Type: ${CONTENT_TYPE}" \
  --header "Authorization: Token token=${TOKEN}" \
  --data-urlencode "passwords[old]=${OLD_PW}" \
  --data-urlencode "passwords[new]=${NEW_PW}"
}

json() {
#
  CONTENT_TYPE="application/json"

  curl ${URL}\
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --data "{
      \"passwords\": {
      \"old\": \"${OLD_PW}\",
      \"new\": \"${NEW_PW}\"
    }
  }"

}

url

# data output from curl doesn't have a trailing newline
echo
