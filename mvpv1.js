// Still misses out some symbols

var csvContent = "data:text/csv;charset=utf-8,Printed text".concat(document.body.innerText.replace(/[\r\n]+/g,",\n"))
var encodedUri = encodeURI(csvContent);
window.open(encodedUri);




// var data = [["name1", "city1", "some other info"], ["name2", "city2", "more info"]];
// var csvContent = "data:text/csv;charset=utf-8,";
// data.forEach(function(infoArray, index){
//
//    dataString = infoArray.join(",");
//    csvContent += index < data.length ? dataString+ "\n" : dataString;
//
// });
// undefined
// var encodedUri = encodeURI(csvContent);
// window.open(encodedUri);
