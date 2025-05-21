#!/usr/bin/env bash

gunicorn -w 3 -b 0.0.0.0:3000 -t 200 beepboop.server:app
