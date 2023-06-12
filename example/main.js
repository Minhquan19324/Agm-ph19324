const url ="https://www.youtube.com"

function loadScript(src,callback){
    let script = document.createElement("script");
    script.scr=src;
    script.onload = function(){
        callback(script);
    }
    document.head.append(script)
}
loadScript(url,function(script){
    console.log("loaded", script);
})