(function(){
    const currentURL = window.location.href;
    switch (currentURL) {
        case currentURL.indexOf("https://www.google") && currentURL.indexOf("/search?q=") :
            console.log("In a Google SERP")
            break;

        default: 
        console.log("any other page")
            break;
    }
})();