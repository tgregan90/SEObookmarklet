(async function(){
    const currentURL = window.location.href;
    
    if (currentURL.indexOf("://www.google") && currentURL.indexOf("/search") && currentURL.indexOf("?") && currentURL.indexOf("q=")){
        console.log("In a Google SERP");
        let data = await fetch("https://cdn.jsdelivr.net/gh/tgregan90/SEObookmarklet@latest/SERPs.min.js");
        if(data.ok){
            data();
        }
        
    } else {
        console.log("Any other site");
    }

})();