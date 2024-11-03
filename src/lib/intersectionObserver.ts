

export function intersectSection() {
  
  // Select all sections and nav links
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".linkMarker");
  const navMarker = document.querySelectorAll(".navMarker");
  const sidemarker = document.querySelectorAll(".marker");

  // Function to remove active class from all nav links
  const removeActiveClass = () => {
    navLinks.forEach((link: any) => link.style.width = 0);
    
    
  };

  // Callback function for Intersection Observer
  const callback = (entries: any) => {
    entries.forEach((entry: any, i: number) => {
      
      if (entry.isIntersecting) {
        
        // Remove active class from all links
        removeActiveClass();

        // Get the link corresponding to the section in view and add the active class
      const link = document.querySelectorAll(`.${entry.target.id}`);
      
      link.forEach((item:any)=>{
         item.style.width = "100%";
      })
      
      }
    });
  };

  // Options for the observer to trigger when the section is fully in view at the top
  const options = {
    threshold:0.8,
    rootMargin:"0px 0px 0px 0px"
  };

  // Create the observer
  const observer = new IntersectionObserver(callback, options);

  // Observe each section
  sections.forEach((section) => {
    observer.observe(section)
  });
}


