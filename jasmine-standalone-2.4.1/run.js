var aritGeo = function(list){
   // check if list is empty
       if(list.length > 0){
           var is_arr = true;
           var is_geo = true;

//setting conditions for checking the arithmetic and geometric progressions of elements of the list
           diff1 = list[1] - list[0];
           diff2 = list[1] / list[0];
          
          for(var i=1; i<list.length; i++){
               test1 = list[i] - list[i-1];
               test2 = list[i] / list[i-1];
     //Testing whether the elements conforms to the conditions of the ar and geo progressions        
               if(test1 != diff1){
                   is_arr = false;
               }
               
               if(test2 != diff2){
                   is_geo = false;
               }
           }

     //decision based on the above results    
           if(is_arr){
               return "Arithmetic";
           }else if(is_geo){
               return "Geometric";
           }else{
               return -1;
           }
       } 
       else{
           return 0;
       }
   
};
