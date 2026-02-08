#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$repo_root"

echo "Preparing publish for @pedroct/kit-agentes..."

if ! command -v npm >/dev/null 2>&1; then
  echo "Error: npm not found in PATH."
  exit 1
fi

npm pack --dry-run >/dev/null

read -r -p "Enter OTP (from authenticator): " otp
if [[ -z "$otp" ]]; then
  echo "Error: OTP is required."
  exit 1
fi

if [[ ! "$otp" =~ ^[0-9]+$ ]]; then
  echo "Error: OTP must be numeric."
  exit 1
fi

npm publish --access public --otp="$otp"
