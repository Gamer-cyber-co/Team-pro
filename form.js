class Form
{
  constructor()
  {
    this.htp= createButton("HOW TO PLAY? ")
  this.title =createElement('h2')
  this.title1=createElement('h2')
  }

  display()
  {
   

   this. htp.position(width/2+50,height/2);
         
   this. htp.mousePressed(()=>{

       
       this.title.html("INSTRUCTION: Touch The Temple To Go For Te Next level To Hunt & Start Hunting Birds")
        this.title.position(50,400);
       this.title1.html("HOW TO PLAY: USE LEFT & RIGHT TO MOVE")
       this.title1.position(50,450)
        
    })
      

  }

  hide()
  {
    this.htp.hide();
    this.title.hide();
    this.title1.hide();
  }
}

