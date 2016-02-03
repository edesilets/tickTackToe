#!/bin/bash

EMAIL='test@test.j'
PASSWORD='anpassword'

BASE_URL="http://tic-tac-toe.wdibos.com"
URL="${BASE_URL}/sign-up"
#URL="http://httpbin.org/post"

url() {
  CONTENT_TYPE="application/x-www-form-urlencoded"

  curl ${URL} \
  --silent \
  --request POST \
  --header "Content-Type: ${CONTENT_TYPE}" \
  --data-urlencode "credentials[email]=${EMAIL}" \
  --data-urlencode "credentials[password]=${PASSWORD}"
}

json() {
  CONTENT_TYPE="application/json"

  curl ${URL} \
  --include \
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
