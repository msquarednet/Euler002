var Euler = {
    doStuff: function(max) {
        var farr = [1,2];
        var num=0,flen=0,sum=0;
        var fourmil = max || 0;       
        //max is the value of the largest desired fibonacci number

        function doNextFib() {
            flen = farr.length;
            num  = farr[flen-2]+farr[flen-1];
            if (num>fourmil) {return;}
            farr.push(num);
            //console.log(farr);  
        }

        if (fourmil) {
            while(num < fourmil) {doNextFib();}
            console.log(farr);

            sum = _.reduce(farr, function(memo, num){ 
              //console.log("memo="+memo+", num="+num);
              return (num%2===0) ? memo+num : memo;
            }, 0);
        }
        
        return sum;
    }
};