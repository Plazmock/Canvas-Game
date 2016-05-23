// toReturn = "arrayOfLines" || "text" 
function readFile(file, toReturn) {
    var reader = new FileReader();
    var rawFile = new XMLHttpRequest();
    var allText = "";
    var arrayOfLines = [];

    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
                arrayOfLines = allText.split(/\r?\n/);
            }
        }
    }
    rawFile.send(null);

    switch(toReturn){
        case "arrayOfLines":
            return arrayOfLines;
        case "text":
            return allText
    }
}
