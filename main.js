Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90

});

camera = document.getElementById("camera");

Webcam.attach ( "#camera" );
function take_snapshot(){

Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id= "image1" src="'+data_uri+'">';

});



}
console.log (" Model version : ", ml5.version);
Classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/uxdPVRdwE/", Modelloaded);
function Modelloaded(){

console.log("Model is loaded")

}
