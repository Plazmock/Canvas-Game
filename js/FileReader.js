class FileReader{

    constructor(file){
    }

    readTextFile(file)
    {
        // Check for the various File API support.
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            //do your stuff!

        } else {
            alert('ERROR s01: The File APIs are not fully supported by your browser.');
        }
    }
}