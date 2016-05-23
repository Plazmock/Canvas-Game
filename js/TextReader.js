class TextReader{

    constructor() {
        this.reader = new FileReader();
        this.text = new Array();
/*
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            this.reader.onload = function(e) {
                alert('asd');
                this.text = reader.result;
                alert(e.target.result);
            }
        } else {
            alert('ERROR s01: The File APIs are not fully supported by your browser.');
        }
*/
    }

    readFile(file) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function () {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    allText.split(" ");
                    console.log(allText);
                }
            }
        }
        rawFile.send(null);
    }
}