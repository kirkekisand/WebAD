window.onload = function(){
    fetch("res/json/posts.json")
        .then((response) => response.json())
        .then(json =>{
            console.log(json);
            for(let i = 0; i < json.length; i++){
                let div = this.document.createElement("div");
                div.className = 'postBox';
                let header = this.document.createElement("header");
                let profImg = this.document.createElement("img");
                profImg.src = json[i].profImg;
                let postTitle = this.document.createElement("h3");
                postTitle.innerText = json[i].title;
                let postBody = this.document.createElement("p");
                postBody.innerText = json[i].body;
                div.appendChild(postTitle);
                div.appendChild(postBody);
                this.document.body.appendChild(div);
            }
        })
}