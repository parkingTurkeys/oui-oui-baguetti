

getArticles()


function replaceArticle(indexOfArticle) {
    document.getElementById("article").innerHTML = articles[indexOfArticle]
    document.getElementById("title").innerHTML = titles[indexOfArticle]
    document.getElementById("back").style.visibility = "visible"; 
}

function getArticles() {
    list = document.getElementById("article-list")
    x = list.innerHTML
    
    for (let i = 0; i < articles.length; i++) {
       x = `${x}<span id ='bullet'> ◼</span> <a onclick = "replaceArticle(${i})">${articleNames[i]}</a>`;
       x = `${x}<span id = "subtitle">${articleSubtitles[i]}</span><br>`

       list.innerHTML = x
    }
}

//Dark Mode I got from a tutorial, but the styling & the emoji is all me :)

function darkmode() {
    var element = document.body;
    element.classList.toggle("darkmode");
    if (document.getElementById("darkmodebutton").innerHTML == "☾" ) {
        document.getElementById("darkmodebutton").innerHTML = "🌞︎︎"
    } else {
        document.getElementById("darkmodebutton").innerHTML = "☾"
    };

  }

function ccby() {
    alert( "This work is licensed under CC BY-NC 4.0" )
}
