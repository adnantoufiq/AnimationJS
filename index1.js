

for (var i=0;i<3;i++)
{

   document.querySelectorAll(".b1")[i].addEventListener("click",function()
   {
         var text= this.innerHTML;
         console.log(text);
         AudioPlay(text);
         playAnimation(text);

     
   });

}

function AudioPlay(text)
{
   switch(text)
   {
      case "a":
      var song= new Audio("audio/a.mp3");
      song.play();
      break;

      case "b":
      var song= new Audio("audio/b.mp3");
      song.play();
      break;

      case "c":
      var song= new Audio("audio/c.mp3");
      song.play();
      break;
   }

};

document.addEventListener("keypress", function (event) {

   var text=event.key;
   AudioPlay(text);
   playAnimation(text);
   
});


function playAnimation(text)
{
   var selectedButton= document.querySelector("."+ text);
   selectedButton.classList.add("anim");
}