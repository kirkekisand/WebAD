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
                profImg.src = json[i].profileImg;
                let date = this.document.createElement("p");
                date.innerText = json[i].createTime;
                header.appendChild(profImg);
                header.appendChild(date);
                div.appendChild(header);
                if(json[i].postImg!=null){
                    let postImg = this.document.createElement("img");
                    postImg.src = json[i].postImg;
                    div.appendChild(postImg);
                }
                let postBody = this.document.createElement("p");
                postBody.innerText = json[i].postText;
                div.appendChild(postBody);
                this.document.getElementById("feed").appendChild(div);
            }
        })
        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
            })
}