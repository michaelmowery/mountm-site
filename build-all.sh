#!/usr/bin/env bash
# Builds the live site at the root plus the three color review builds at /colors/<theme>/.
set -euo pipefail
npx astro build
for t in evergreen alpenglow dusk alpine canyon glacier; do
  PUBLIC_THEME=$t SITE_BASE=/colors/$t npx astro build --outDir dist/colors/$t
done
