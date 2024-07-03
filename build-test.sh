#! /bin/sh
set -eu

# The purpose of this script is to test the production build process
#   and check the resulting code at least responds to `GET /`

pipe=tmp_pipe
mkfifo $pipe

{
    set -e
    npm run build
    node dist/index.js > $pipe &
    pid=$!
    grep -q "running" $pipe # Wait for the server to start
    curl -s http://localhost:3000/ | grep -q "Hello World!" && {
        echo "Test passed"
        kill $pid
        rm $pipe
    }
} || {
    echo "Test failed"
    kill $pid
    rm $pipe
    exit 1
}
