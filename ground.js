class Ground
{
    constructor(x,y,w,h)
    {

        let options=
        {
            isStatic:true
            
        }

        this.groundObj=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        World.add(world,this.groundObj);
    }

    display()
    {
        rectMode(CENTER);
        fill("yellow");
        stroke(0);
        push ();
        // translate (this.groundObj.postion.x,this.groundObj.y); 
        rect(0,0,this.w,this.h);
        pop ();
    }
}