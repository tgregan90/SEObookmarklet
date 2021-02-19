async function run(){
    let code = await fetch("https://cdn.jsdelivr.net/gh/tgregan90/SEObookmarklet@latest/app.min.js");
    await code();
}
run();