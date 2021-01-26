function wordConter(str){
    str = str.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    str = str.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    str = str.replace(/\n /g,"\n"); // exclude newline with a start spacing
    str = str.replace(/\n/g, " ");
    return str.split(' ').filter(function(str){return str!="";}).length;
}

function charCounter(str){
    str = str.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    str = str.replace(/[ ]{2,}/gi,"");//2 or more space to 1
    str = str.replace(/\n /g,""); // exclude newline with a start spacing
    str = str.replace(/ /g, "");
    str = str.replace(/\n/g, "");
    return str.length;
}

function setValue(elementId, value){
    document.getElementById(elementId).innerHTML = value;
}

function getValue(elementId){
    return document.getElementById(elementId).value;
}

function analyze(){
    let text = getValue("text");
    console.log(text);
    setValue("words",
    "Total words: " + wordConter(text));

    setValue("chars", "Total character: " + charCounter(text));
}