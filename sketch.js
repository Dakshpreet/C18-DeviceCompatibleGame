var student

function setup() {
  createCanvas(400,400);

  student = new Student(9,"Daksh",17)
}

function draw() 
{
  background(30);
  
  student.show();

}