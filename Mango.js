class Mango
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
			
			}
		this.x=x;
		this.y=y;
		this.r=r

        this.mango1=loadImage("mango.png");
		//mango1.scale=0.01;
		this.mango2=loadImage("mango.png");
		//mango2.scale=0.01;
		this.mango3=loadImage("mango.png");
		//mango3.scale=0.01;
		this.mango4=loadImage("mango.png");
		//mango4.scale=0.01;
		this.mango5=loadImage("mango.png");
		//mango5.scale=0.01;
		this.mango6=loadImage("mango.png");
		//mango6.scale=0.01;
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
		image(this.mango1,1200,300);
		image(this.mango2,1250,350);
		image(this.mango3,1250,200);
		image(this.mango4,1150,300); 
		image(this.mango5,1200,350);
		image(this.mango6,1100,250);
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}

