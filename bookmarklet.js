async function run(){
    let code = await fetch("https://cdn.jsdelivr.net/gh/tgregan90/SEObookmarklet/app.js");
    await code();
}
run();