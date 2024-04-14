const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')

 // Function to check if an element is in the viewport
function isInViewport(element) {
    var bounding = element.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll event
  function onScroll() {
    var div =document.querySelector('.service_container')
    if (isInViewport(div)) {
      div.style.animation = 'slideIn 1s ease forwards'; // Start animation when div is in viewport
      window.removeEventListener('scroll', onScroll); // Remove event listener to prevent repetitive animation
    }
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', onScroll);
  

    