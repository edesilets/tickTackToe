#!/bin/bash

TOKEN='4764a316576240860c4e6271aa6d17c5'
USER_ID='7'
OLD_PW='password'
NEW_PW='defcon'

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
  # CONTENT_TYPE="application/json"
  #
  # curl ${URL}\
  # --include \
  # --request PATCH \
  # --header "Authorization: Token token=${TOKEN}" \
  # --data "{
  #     \"passwords\": {
  #     \"old\": \"${OLD_PW}\",
  #     \"new\": \"${NEW_PW}\"
  #   }
  # }"

}

url

# data output from curl doesn't have a trailing newline
echo
