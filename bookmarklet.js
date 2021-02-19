function run(){
    let code =  fetch("https://cdn.jsdelivr.net/gh/tgregan90/SEObookmarklet@latest/app.min.js")
    .then(response=> response();)
}
run();