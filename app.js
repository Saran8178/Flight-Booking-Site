const btn = document.querySelector('.talk');
const content= document.querySelector('.content');
function speak(sentence)
{
    const text_spak=new SpeechSysnthesisUtterance(sentence);
    text_speak.rate=1;
    text_speak.pitch=1;
    window.speechSynthesis.speak(text_speak);

}
function wishMe()
{
   var day=new Date();
   var hr=day.getHours();
   if(hr>=8 && hr<12)
   {
    speak("Good Morning");
   } 
   
   if(hr>12 && hr<=12)
   {
    speak("Afternoon");
   } 
   else{
    speak("Good Evening");
   }
}
window.addEventListener('load',()=>)
{
    speak("Activating");
    speak("going online");
}