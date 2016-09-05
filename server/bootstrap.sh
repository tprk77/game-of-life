#!/bin/bash

curr_dir=$(dirname "${0}")

if ! which virtualenv &>/dev/null; then
    echo "virtualenv not installed!" 1>&2
    exit 1
fi

# Create virtual environment is none exists
if [ ! -d "${curr_dir}/venv" ]; then
    virtualenv -p python3 "${curr_dir}/venv"
fi

# Install dependencies
(
    source "${curr_dir}/venv/bin/activate"
    pip install -q -r "${curr_dir}/requirements.txt"
)
