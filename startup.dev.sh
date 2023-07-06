#!/usr/bin/env bash
set -e

/opt/wait_for_it.sh postgres:5432
npm run migration:run
npm run seed:run
npm run start:dev
