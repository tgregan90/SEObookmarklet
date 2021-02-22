(async function(){
    const currentURL = window.location.href;
    
    if (currentURL.indexOf("://www.google") && currentURL.indexOf("/search") && currentURL.indexOf("?") && currentURL.indexOf("q=")){
        console.log("In a Google SERP");
        let s = document.createElement("script");
        s.src="https://cdn.jsdelivr.net/gh/tgregan90/SEObookmarklet@latest/SERPs.min.js";
        document.body.insertAdjacentElement("afterbegin",s);
    }

})();