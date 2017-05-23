(function () {
    'use strict';

    angular.module('app').filter('datefilter', function($filter)
    {
        return function(input)
        {
            if(input == null){ return 0; }
            
            if(typeof input === 'string' || input instanceof String)
            { 
               
               var year = input.substring(0,4);
               var month = input.substring(4,6);
               var day = input.substring(6,8);
               var hour = input.substring(8,10);
               var minute = input.substring(10,12);

               var second = input.substring(12,14);
               var _date = $filter('date')(new Date(year,month,day,hour,0,second,0), 'yyyy-MMM-dd HH:mm:ss');
               
               return _date;

           }
           
           if(typeof input === 'number' || input instanceof Number)
           { 
               var date = new Date(input * 1000);
               var year = date.getFullYear();
               var month = date.getMonth();
               var day = date.getDate();
               var hour = date.getHours();
               var minute = date.getMinutes();
               var second = date.getSeconds();
               var _date = $filter('date')(new Date(year,month,day,hour,0,second,0), 'yyyy-MMM-dd HH:mm:ss');

               return _date;
           }
           
           
           
       };
   });


    

})();