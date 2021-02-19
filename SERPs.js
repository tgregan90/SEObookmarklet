(function(){
    const console = `
    <div id="SERPControlconsole">
        <div class="container">
            <h1 class="title">SERP Console</h1>
            <button id="addNumbers" onclick="document.webBookmarklet.addNumbers()">Add numbers</button>
        </div>
        <style>
            #SERPControlconsole{
                height: 200px;
                width: 200px;
                position: absolute;
                right: 5px;
                top: 5px;
                background-color: white;
                color: black;
                z-index: 9999;
                border: 1px solid black; 
            }
            #SERPControlconsole .title{
                font-size: 1.5rem;
            }
        </style>

    </div>
    
    `;
    document.body.insertAdjacentHTML("afterbegin",console);
    document.webBookmarklet = {};
    document.webBookmarklet.addNumbers = function(){
        const organicResults = document.querySelector("#search").querySelector("#rso").querySelectorAll(".g");
        for(let i = 0; i < organicResults.length; i++ ){
            
            let p = document.createElement("p");
            p.classList.add("serpNumbers");
            let j = i + 1;
            p.innerText = "Rank: " + j.toString();
            organicResults[i].insertAdjacentElement("beforebegin",p);
        }
    }
})();



