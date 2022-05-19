var h1=document.createElement("h1");
var heading1=document.createTextNode("Indians Order 95~200 Biriyanis Per Minute (BPM).")
h1.append(heading1);
var h2=document.createElement("h2");
var heading2=document.createTextNode("This API shall bless you with hunger to eat biriyani.")
h2.append(heading2);
document.body.append(h1,h2)

var input=document.createElement("input");
input.setAttribute("type","button");
input.setAttribute("value","GET ONE MORE!!");
input.setAttribute("id","button");
document.body.append(input);

var img=document.createElement("img");
img.setAttribute("id","img");
document.body.append(img);
input.addEventListener("click",toget)

async function toget(){

var url =await fetch("https://biriyani.anoram.com/get")
//console.log(url)
var result=await url.json()
//console.log(result);
document.getElementById("img").src=result.image;
}

toget()

