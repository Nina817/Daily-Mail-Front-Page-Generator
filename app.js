let arr1 = ["Are Lesbians ", "Is the Marxist Left ", "Are Ethnic Minorities ","Are Sex Workers ", "Are Teenage Yobs ", "Is The EU ", "Are Jihadis ", "Are Romanians ", "Is The Labour Party ", "Are Immigrants ", "Is Jeremy Corbyn ", "Are Millenials ", "Is Left-Wing Propaganda ", "Are Communists ", "Is Channel 4 ", "Are Feminists ", "Are Terrorists ", "Is ISIS ", "Are Asylum Seekers ", "Are Muslims ", "Is the Nanny State ", "Are the Unemployed ", "Is the Welfare State ", "Are Single Mothers ", "Are Brussels Bureaucrats ", "Is Meghan Markle "];
let arr2 = ["Radicalising ", "Scrounging off ", "Diddling ", "Destroying ", "Soliciting ", "Terrorising ", "Blackmailing ", "Plotting Against ", "Making False Accusations Against ", "Devaluing ", "Hurting ", "Threatening ", "Eating ", "Stealing from ", "Ruining ", "Molesting ", "Burgling ", "Having Sex With ", "Attacking ", "Killing ", "Defrauding ", "Embezzling from ", "Conspiring Against ", "Waging War on ", "Exploiting "];
let arr3 = ["The British Justice System?", "The Church?", "Sir Tom Jones?", "Your Mortgage?", "Dame Judy Dench?", "Rod Stewart?", "David Attenborough?", "Barry Manilow?", "Prince William?", "Nurses?", "Babies?", "Cups of Tea?", "Your Pets?", "British Army Veterans?","Cliff Richard?", "Children?", "The Housing Market?", "Your Pension?", "Local Communities?", "British Freedom of Speech?", "The Queen?", "Sandwiches?", "The Royal Family?", "The Middle Class?", "Your Family?", "Britain's Farmers?", "The British Countryside?", "Hardworking Taxpayers?", "Princess Diana's Memory?", "Your Pets?", "The Elderly?", "Bees?", "Families?"]

function fun1(){
    var i = Math.floor(Math.random()*(arr1.length));
    console.log(arr1[i]);
    document.getElementById("1").innerHTML = arr1[i];
}

function fun2(){
    var j = Math.floor(Math.random()*(arr2.length));
    console.log(arr2[j]);
    document.getElementById("2").innerHTML = arr2[j];
}

function fun3(){
    var k = Math.floor(Math.random()*(arr3.length));
    console.log(arr3[k]);
    document.getElementById("3").innerHTML = arr3[k];
}

let images =[];

images[0]=document.createElement("img"); //mum and daughter WORKING
images[0].src = "data:image/jpeg;base64,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";

images[1]=document.createElement("img"); //man in front of hospital WORKING
images[1].src = "https://editorial01.shutterstock.com/wm-preview-1500/2586231a/95ce72fc/the-daily-mail-good-health-awards-unsung-heroes-of-the-n-h-s-the-chaplain-the-church-of-england-chaplain-at-warrington-hospital-nhs-trust-cheshire-shutterstock-editorial-2586231a.jpg";

// images[2]=document.createElement("img"); //EXPIRED
// images[2].src = "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/170366262_4275968802448090_5111418741829106580_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=e3f864&_nc_ohc=3r63sJNz3fYAX-J2wLh&_nc_ht=scontent-lhr8-1.xx&oh=eab23ca9277db28fea19a54d3fe3f351&oe=60AEC7A5";

images[2]=document.createElement("img"); //man in front of building site WORKING
images[2].src= "https://www.hastingsobserver.co.uk/webimg/T0FLMTMwNDEzNDA3.jpg?crop=982:736,smart&width=990";

// images[4]=document.createElement("img"); // EXPIRED
// images[4].src= "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/175000514_4299967140048256_475521768206339659_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=N4lOsJT4ouwAX--oAGl&_nc_ht=scontent-lhr8-1.xx&oh=e2a21cf5cc11388cdef6bc2218ac0a21&oe=60AC2BA5";

// images[5]=document.createElement("img"); //man hid pork down trousers EXPIRED
// images[5].src= "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/130283568_3921407991237508_8078946815373578535_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=qrFC7N516aQAX96Jie8&_nc_ht=scontent-lhr8-1.xx&oh=e8f0cd9761afb3b615b475a20be3c364&oe=60AF32A3";

// images[6]=document.createElement("img");//mum and daughter w pothole EXPIRED
// images[6].src= "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/175383469_4305667166144920_3592563288090270941_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Aygi9h9QCfgAX-RT6v3&_nc_ht=scontent-lhr8-1.xx&oh=906aa9f10b86ab73080db9789b60acf4&oe=60AFCB0F";

// images[7]=document.createElement("img"); //mr tumbles EXPIRED
// images[7].src= "https://scontent-lhr8-2.xx.fbcdn.net/v/t1.6435-9/171504532_4282954508416186_8502610059474297801_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=RD9iXIfaq54AX9RyrD6&_nc_ht=scontent-lhr8-2.xx&oh=5be9146645b92942eeef8dc232162d5e&oe=60ACE6AF";

// images[8]=document.createElement("img"); //nun headline EXPIRED
// images[8].src= "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/159814484_4191732034205101_7315095138441853105_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=fGi7hPKO3pYAX8EYi5c&_nc_ht=scontent-lhr8-1.xx&oh=f1ddcc5dd21f874ebc757bddf91089ff&oe=60AC9F83";

// images[9]=document.createElement("img"); //mum w school girl in skirt EXPIRED
// images[9].src= "https://scontent-lhr8-2.xx.fbcdn.net/v/t1.6435-9/159471273_4188660554512249_2102070958795137966_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=nw7kLNXPptAAX8G5Wo7&_nc_ht=scontent-lhr8-2.xx&oh=c6cf92cf3fe6081b169ac22cc8d572b1&oe=60AC617B";

// images[10]=document.createElement("img"); //EXPIRED
// images[10].src= "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/155016708_4151785071533131_680973238254557081_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=a5FsmNoJKrAAX-VqPcf&_nc_ht=scontent-lhr8-1.xx&oh=8b92305bfdc02a82a9e621f840eda668&oe=60AE7B21";

// images[11]=document.createElement("img"); //EXPIRED
// images[11].src= "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/150913455_4118965661481739_1960553377981901236_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=q3snI_AUmpsAX9crTd3&_nc_ht=scontent-lhr8-1.xx&oh=71d3df1cf4cbbca313a52c1ee7b253cd&oe=60AF7FFC";

images[3]=document.createElement("img"); //WORKING
images[3].src= "https://img.huffingtonpost.com/asset/5d01723b250000a013df0d8e.jpeg?ops=1200_630";

images[4]=document.createElement("img"); //WORKING
images[4].src= "https://static.boredpanda.com/blog/wp-content/uploads/2019/10/stupid-funny-newspaper-headlines-5db2ba2586e3c__700.jpg";

// images[14]=document.createElement("img");//matt hancock EXPIRED
// images[14].src= "https://scontent-lhr8-2.xx.fbcdn.net/v/t1.6435-9/135782208_3999168813461425_1309198534116789044_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9egGf2wWywwAX8uuScu&_nc_ht=scontent-lhr8-2.xx&oh=63ca38a0921cd5036fe9db740bc395b7&oe=60ACA707";

var h=0;

function changeImage(){
document.getElementById("image").src = images[h].src;
if(h=0){
    h++;
}else if(h>=images.length-1){
    h--;
}else{
    h= Math.floor(Math.random()*(images.length));
}
}

window.onload = changeImage; 