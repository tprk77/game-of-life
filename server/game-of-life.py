#!/usr/bin/env python3

# Copyright (c) 2016 Joey Perkins
# Copyright (c) 2016 Tim Perkins

import sys
import bottle

@bottle.route("/")
def dummy_route():
    return "The Game Of Life!"

def main(argv):
    print("Starting Game Of Life server!")
    bottle.run(host="localhost", port=8080, debug=True)
    # Server will now run until someone presses Ctrl-C
    print("Finishing Game Of Life server!")
    return 1

if __name__ == "__main__":
    sys.exit(main(sys.argv))
