(function(){
    const currentURL = window.location.href;
    
    if (currentURL.indexOf("://www.google") && currentURL.indexOf("/search") && currentURL.indexOf("?") && currentURL.indexOf("q=")){
        console.log("In a Google SERP");
        let code = await fetch("https://cdn.jsdelivr.net/gh/tgregan90/SEObookmarklet/SERPs.min.js");
         await code();
    } else {
        console.log("Any other site");
    }

})();