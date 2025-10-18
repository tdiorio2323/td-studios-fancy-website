#!/usr/bin/env bash
set -euo pipefail
URL="https://tdstudiosny.com"

status=$(curl -s -o /dev/null -w "%{http_code}" -L "$URL")
[ "$status" = "200" ] || { echo "Non-200: $status"; exit 1; }

html=$(curl -s -L "$URL")
echo "$html" | grep -q "TD STUDIOS" || { echo "Marker not found"; exit 2; }

# verify assets respond
css_url=$(echo "$html" | grep -Eo '/_next/static/css/[a-zA-Z0-9\-]+\.css' | head -1 || true)
js_url=$(echo "$html" | grep -Eo '/_next/static/chunks/[a-zA-Z0-9\-]+\.js' | head -1 || true)

for path in "$css_url" "$js_url"; do
  [ -n "$path" ] || continue
  code=$(curl -s -o /dev/null -w "%{http_code}" -L -I "https://tdstudiosny.com$path")
  [ "$code" = "200" ] || { echo "Asset check failed: $path ($code)"; exit 3; }
done

echo "Smoke OK"
