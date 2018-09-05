 $(document).ready(function () {


         
     if ($(window).width() <= '767'){
         
         
         $(".menu").click(function(){
             $(this).find("ul").toggle();
         });

          $(".item-email").click(function(){
             $(this).find("a").toggle();
         });

          $(".item-phone").click(function(){
             $(this).find("a").toggle();
         });
         
         
         
         jQuery(function($){
            $(document).mouseup(function (e){ 
                var block = $(".menu ul"); 
                if (!block.is(e.target) 
                    && block.has(e.target).length === 0) { 
                    block.hide(); 
                }
                
                var block = $(".item-email a"); 
                if (!block.is(e.target) 
                    && block.has(e.target).length === 0) { 
                    block.hide(); 
                }
                
                var block = $(".item-phone a"); 
                if (!block.is(e.target)
                    && block.has(e.target).length === 0) { 
                    block.hide(); 
                }
            });
        });
      
     }

         
    
     


     
     
     
     

});



