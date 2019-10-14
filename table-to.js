var tableLimit = 10;
var tableLine = " ";

for ( var i = 1; i <= tableLimit; i++){
    
    console.log(" "+ i);
    
    tableLine = "  ";
    for (var j = 1; j <= tableLimit; j++) {
        
    tableLine += "  "+(i * j)+" ";
    }   
    console.log(tableLine);

}