# Server #

## Overview ##

This server runs **The Game Of Life**! The server provides a [REST API][rest_api] to get the state
of the game, which is then used by JavaScript clients running in the browser. The server is written
in Python 3, and uses the [Bottle][bottle] micro web-framework.

## Dependencies ##

The server uses [`virtualenv`][virtualenv] for an isolated Python environment containing all
dependencies. The dependencies are listed in `requirements.txt`. To setup the virtual environment
and dependencies, run the `./bootstrap.sh` script. You only need to bootstrap once. After setting up
the environment, you will need to activate and deactivate the environment as usual.

    $ ./bootstrap.sh
    $ source venv/bin/activate
    $ # Do whatever
    $ deactivate

[rest_api]: http://stackoverflow.com/questions/671118/what-exactly-is-restful-programming
[bottle]: http://bottlepy.org/docs/dev/index.html
[virtualenv]: https://virtualenv.pypa.io/en/stable/userguide/
