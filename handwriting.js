var paths = document.querySelectorAll("svg path"),

    i = 0;

paths.forEach(function(item, index){

    i++;
    var pathLength = item.getTotalLength();
    item.setAttribute("stroke-dasharray", pathLength);
    item.setAttribute("stroke-dashoffset", pathLength);

    if(index == 0){
        item.innerHTML = "<animate id='a" + i + "' attributeName='stroke-dashoffset' begin='0s' dur='3s' to='0' fill='freeze'/>";
    }else{
        item.innerHTML = "<animate id='a" + i + "' attributeName='stroke-dashoffset' begin='a" + (i-1) + ".end' dur='3s' to='0' fill='freeze'/>";
    }

    


    console.log(index, pathLength, item.innerHTML)

});