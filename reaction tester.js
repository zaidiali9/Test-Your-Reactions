var start=new Date().getTime();
function makeshapeapper() {
    var top=Math.random() * 400;
    var left=Math.random()*400;
    var width=(Math.random()*200)+100;
    var dec=Math.random()*10;
    if(dec<5)
    {
        document.getElementById("shape").style.borderRadius="50%"
    }
    else
    {
        document.getElementById("shape").style.borderRadius="0%"
    }
    document.getElementById("shape").style.top=top+"px";
    document.getElementById("shape").style.left=left+"px";
    document.getElementById("shape").style.width=width+"px";
    document.getElementById("shape").style.backgroundColor=getRandomColor();
    document.getElementById("shape").style.display="block";
    start=new Date().getTime();   
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function settimedelay()
{
    
    setTimeout(makeshapeapper,Math.random()*2000);
}
settimedelay();
document.getElementById("shape").onclick=function()
{
    document.getElementById("shape").style.display="none";
    var end=new Date().getTime();
    var timetaken=(end-start)/1000;
    document.getElementById("timetake").innerHTML=timetaken+" Sec";
    settimedelay();
}