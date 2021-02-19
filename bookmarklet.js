async function run(){
    let data = await fetch("https://cdn.jsdelivr.net/gh/tgregan90/SEObookmarklet@latest/app.js");
    if(data.ok){
        data();
    }
}   
