function buttonClicked(){

    //To call out the variable from index.html
    var varsity = document.getElementById("varsity").value
    var country = document.getElementById("country").value

    //fetching data from API based on variable
    fetch(`http://universities.hipolabs.com/search?name=${varsity}&country=${country}`)
    .then((response) => response.json())
    .then((data) => {
        var info = data
            console.log(info)

    //Choosing 5 random varsity without any repitition
            var total = data.length  
                var random = [];
                for(var i = 0;i<total ; i++){
                    var temp = Math.floor(Math.random()*total);
                    if(random.indexOf(temp) == -1){
                        random.push(temp);
                    }
                    else
                    i--;
                }
               
    //Declaring variable for each data found
        var uni0 = data[random[0]].name;
        var uni1 = data[random[1]].name;
        var uni2 = data[random[2]].name;
        var uni3 = data[random[3]].name;
        var uni4 = data[random[4]].name;

        var web0 = data[random[0]].web_pages[0];
        var web1 = data[random[1]].web_pages[0];
        var web2 = data[random[2]].web_pages[0];
        var web3 = data[random[3]].web_pages[0];
        var web4 = data[random[4]].web_pages[0];

    //Outputting data based on their respecting classes in index.html
        document.querySelector(".uni0").innerText = uni0;
        document.querySelector(".uni1").innerText = uni1;
        document.querySelector(".uni2").innerText = uni2;
        document.querySelector(".uni3").innerText = uni3;
        document.querySelector(".uni4").innerText = uni4;
        
        document.querySelector(".web0").innerText = web0;
        document.querySelector(".web1").innerText = web1;
        document.querySelector(".web2").innerText = web2;
        document.querySelector(".web3").innerText = web3;
        document.querySelector(".web4").innerText = web4;

        });
    }
        