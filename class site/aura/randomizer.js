


function pickimg(){
var imagenumber = 19 ;
var randomnumber = Math.random() ;
var rand1 = Math.round( (imagenumber-1) * randomnumber) + 1;
images = new Array
images[1] = "img/img1.png"
images[2] = "img/img2.png"
images[3] = "img/img3.png"
images[4] = "img/img4.png"
images[5] = "img/img5.png"
images[6] = "img/img6.png"
images[7] = "img/img7.png"
images[8] = "img/img8.png"
images[9] = "img/img9.png"
images[10] = "img/img10.png"
images[11] = "img/img11.png"
images[12] = "img/img12.png"
images[13] = "img/img13.png"
images[14] = "img/img14.png"
images[15] = "img/img15.png"
images[16] = "img/img16.png"
images[17] = "img/img17.png"
images[18] = "img/img18.png"
images[19] = "img/img19.png"
var image = images[rand1]
document.randimg.src = image
}
