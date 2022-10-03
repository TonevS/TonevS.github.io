function clickSidebar() {
  if (document.querySelector("#sidebar").className === 'sidebar hidden'){
    document.querySelector("#sidebar").className = 'sidebar';
  }
  else{
    document.querySelector("#sidebar").className ='sidebar hidden';
  }
}