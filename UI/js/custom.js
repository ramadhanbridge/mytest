// variable declalation
let bar=document.querySelector('.menu-toggle');
let closeBar=document.querySelector('.closing');
let adminRejectReview=document.querySelectorAll('.admin-reject-review');
let reviewmessage=document.querySelector('.Reviewdeleted')
let changementee=document.querySelector('.changementee')
let adminchangementee=document.querySelectorAll('.adminchangementee')
let rejectsession= document.querySelectorAll('.reject-session')
let usersession=document.querySelector('.reject-session-message')
//event listners

bar.addEventListener('click',()=>
{
    let reveal=document.querySelector('.side-bar');
    reveal.style.display="grid";
});

closeBar.addEventListener('click',()=>
{
   document.querySelector('.side-bar').style.display="none"
})


// get length on page y poostion and addEventListener to change bakground color
window.onscroll = function (e)
{ 
  if(e.pageY>=10)
  { 
      let hstyle=document.querySelector('header');
      hstyle.classList.add('bgheader');
  }
  else
  {
    let hstyle=document.querySelector('header');
    hstyle.classList.remove('bgheader');
  }
} 

// admin reject review and change admin to a mentor

  adminRejectReview.forEach((btn)=>
{
 
   btn.addEventListener('click',()=>
   {
    reviewmessage.style.display='block'
    setTimeout(()=>{reviewmessage.style.display='none'},1000)


   })
})
// admin change mantee to a mentor

  adminchangementee.forEach((btn)=>
{
 
   btn.addEventListener('click',()=>
   {
    changementee.style.display='block'
    setTimeout(()=>{changementee.style.display='none'},1000)


   })
})

// mentor reject session

  rejectsession.forEach((btn)=>
{
 
   btn.addEventListener('click',()=>
   {
    usersession.style.display='block'
    setTimeout(()=>{usersession.style.display='none'},1000)


   })
})



