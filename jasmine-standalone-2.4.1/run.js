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