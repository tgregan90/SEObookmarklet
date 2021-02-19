(function(){
    const currentURL = window.location.href;
    switch (currentURL) {
        case currentURL.indexOf("https://www.google") && currentURL.indexOf("/search?q=") :
            alert("In a Google SERP")
            break;

    
        default: 
        alert("any other page")
            break;
    }
})();