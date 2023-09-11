var input=document.getElementById("input");
var deg=document.getElementsByName("degrees");
var convert=document.getElementById("convert");
convert.addEventListener("click",function(){
    for(i=0;i<deg.length;i++)
  {
    if(deg[i].checked)
    {
        if(deg[i].value==="Celsius")
        {
            document.getElementById("output").value=parseFloat((parseFloat(input.value)*(1.8)+32))+" degrees Fahrenheit";
        }
        if(deg[i].value==="Fahrenheit")
        {
            document.getElementById("output").value=parseFloat((parseFloat(input.value)-32)/(1.8))+" degrees Celsius";
        }
    }
  }
});
