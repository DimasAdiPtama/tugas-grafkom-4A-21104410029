function setup(){
    //ukuran kanvas
    createCanvas(640,480);
  }
  function draw(){
    //warna background layar
    background(105,171,206);
    //Bulatan Kuning
    fill(255,255,0); //Warna kuning di mataharinya
    stroke(255,255,0); //Warna pinggiran kuning
    ellipse(25,50,250,250); //Lingkaran
    //Garis Hitam
    fill(5);
    stroke(0);
    strokeWeight(100);
    line(1500,2,100,500);
    //membuat kotak
    fill(255,19);
    square(300,190,100,25);
  }