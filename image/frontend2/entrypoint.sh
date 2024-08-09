if [ "$#" -eq 1 ]; then
  echo "replace VITE_API_URL with $1"
  sed -i "s#RUN_TIME_REPLACE_VITE_API_URL#$1#" /app/assets/*.js
else
  echo "need VITE_API_URL"
  exit 1
fi

exec nginx -g "daemon off;"
