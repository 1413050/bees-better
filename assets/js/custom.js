 
 
  $(document).ready(function () {
    const $bee = $(".scrollaber-bee > img");
    const $mainContainer = $("main");
    const startPercentage = 4; // Starting top position in %
    const endPercentage = 92; // Ending top position in %

    $(window).on("scroll", function () {
      const mainOffset = $mainContainer.offset().top;
      const mainHeight = $mainContainer.outerHeight();
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();

      // Check if the main container is in the viewport
      const visibleStart = Math.max(0, scrollTop - mainOffset + windowHeight);
      const visibleEnd = Math.min(mainHeight, visibleStart);

      // Calculate scroll percentage
      const scrollPercentage = Math.max(
        0,
        Math.min(1, visibleEnd / (mainHeight + windowHeight))
      );

      // Update bee's position
      const newTop = startPercentage + (endPercentage - startPercentage) * scrollPercentage;
      $bee.css("top", `${newTop}%`);
    });
  }); 


  //loader-div class fade out after 2s
    setTimeout(function(){
        $('.loader-div').fadeOut();
    }, 2000);