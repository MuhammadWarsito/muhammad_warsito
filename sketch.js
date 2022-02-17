let j;
function setup() {
    // put setup code here
    createCanvas(400,200)
    j=0;
  }
  
  function draw() {
    // put drawing code here
    background(0,400,255)
    strokeWeight(1)
  
    fill(255,255,0)
    strokeWeight(0)

  
    strokeJoin(ROUND)
    strokeWeight(1)
line(200,0,200,400)
line(150,150,150,r+110)


strokeWeight(2)
line(50,40,50,r+110);
line(250,50,250,y-100) ; 
line(350,r+5,350,-100);

var y=400+5*Math.sin(PI*j/80)
var r=100+5*Math.sin(PI*y/90)
var l=150+5*Math.sin(PI*j/170)
var l=150+5*Math.sin(PI*j/110)
j+=1
    
    
 {strokeWeight(2)
  line(300,70,300,95);
  line(50,40,50,r+110);
  

  line(150,50,150,r+110);
  line(250,50,250,y-100) ; 
line(250,50,250,y-100);
line(350,r+5,350,y-100);
strokeWeight(2)


    rect(240,20,120,r)
    rect(40,20,120,r)
    fill(300)
    ellipse(270,60,20,r-100)
    ellipse(70,60,20,r-100)
    ellipse(330,60,20,r-100)
    ellipse(130,60,20,r-100)
    fill(165,42,42)
    rect(240,r+10,120,r-70)

    rect(40,r+10,120,r-70)
    fill(250)
    rect(40,r+10,120,r-90)
    rect(240,r+10,120,r-90)

    fill(222, 49, 99)
    arc(300,90,70,r-80,radians(0),radians(180))
    arc(100,90,70,r-80,radians(0),radians(180))
    fill(300)
    rect(275,90,50,l-145) 
    rect(75,90,50,l-145) 
    line(300,90,300,95)

    strokeWeight(0)
    fill(250,255,220);
    ellipse(250,30,10,10);
    ellipse(50,30,10,10);
    ellipse(250,45,12,12);
    ellipse(50,45,12,12);
    ellipse(350,95,17,12)
    ellipse(50,95,17,12)
    ellipse(250,94,16,1-13)
    ellipse(348,45,12,13)
    ellipse(150,94,17,13)
    ellipse(150,94,17,13)
    strokeWeight(1);//stroke
    fill(255,255,0)
    ellipse(300,70,12,18)
    ellipse(100,70,12,18)}

    
     }