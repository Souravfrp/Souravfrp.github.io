"use strict";
/* Accessible supplementary site navigation. Main headings remain ordinary links. */
document.addEventListener("DOMContentLoaded", () => {
  const items=[...document.querySelectorAll(".nav-item")];
  const closeAll=()=>{
    for(const item of items) {
      item.classList.remove("nav-open");
      item.querySelector(".nav-toggle").setAttribute("aria-expanded","false");
    }
  };
  for(const item of items) {
    const button=item.querySelector(".nav-toggle");
    button.addEventListener("click",event=>{
      event.stopPropagation();
      const wasOpen=item.classList.contains("nav-open");
      closeAll();
      if(!wasOpen) {
        item.classList.add("nav-open");
        button.setAttribute("aria-expanded","true");
      }
    });
    item.addEventListener("keydown",event=>{
      if(event.key==="Escape"){closeAll();item.querySelector("a").focus();}
    });
    item.querySelectorAll(".nav-menu a").forEach(link=>link.addEventListener("click",closeAll));
  }
  document.addEventListener("click",event=>{
    if(!event.target.closest(".nav-item"))closeAll();
  });
  document.addEventListener("keydown",event=>{if(event.key==="Escape")closeAll();});
});
