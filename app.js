(function(){
    const currentURL = window.location.href;
    
    if (currentURL.indexOf("://www.google") && currentURL.indexOf("/search") && currentURL.indexOf("?") && currentURL.indexOf("q=")){
        console.log("In a Google SERP");
    } else {
        console.log("Any other site");
    }

})();