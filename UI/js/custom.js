// variable declalation
const bar = document.querySelector(".menu-toggle");
const closeBar = document.querySelector(".closing");
const adminRejectReview = document.querySelectorAll(".admin-reject-review");
const reviewmessage = document.querySelector(".Reviewdeleted");
const changementee = document.querySelector(".changementee");
const adminchangementee = document.querySelectorAll(".adminchangementee");
const rejectsession = document.querySelectorAll(".reject-session");
const usersession = document.querySelector(".reject-session-message");
// event listners

bar.addEventListener("click", () => {
  const reveal = document.querySelector(".side-bar");
  reveal.style.display = "grid";
});

closeBar.addEventListener("click", () => {
  document.querySelector(".side-bar").style.display = "none";
});

// get length on page y poostion and addEventListener to change bakground color
window.onscroll = function(e) {
  if (e.pageY >= 10) {
    const hstyle = document.querySelector("header");
    hstyle.classList.add("bgheader");
  } else {
    const hstyle = document.querySelector("header");
    hstyle.classList.remove("bgheader");
  }
};

// admin reject review and change admin to a mentor

adminRejectReview.forEach(btn => {
  btn.addEventListener("click", () => {
    reviewmessage.style.display = "block";
    setTimeout(() => {
      reviewmessage.style.display = "none";
    }, 1000);
  });
});
// admin change mantee to a mentor

adminchangementee.forEach(btn => {
  btn.addEventListener("click", () => {
    changementee.style.display = "block";
    setTimeout(() => {
      changementee.style.display = "none";
    }, 1000);
  });
});

// mentor reject session

rejectsession.forEach(btn => {
  btn.addEventListener("click", () => {
    usersession.style.display = "block";
    setTimeout(() => {
      usersession.style.display = "none";
    }, 1000);
  });
});
