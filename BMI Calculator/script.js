    
    function bmi_calculation()
    {  
        var Weight= parseInt(document.getElementById("weight").value)
        var Height= parseInt(document.getElementById("height").value)
        var Result=document.getElementById("result")
        var Calc_btn= document.getElementById("calc") 
        var Status=document.getElementById("status")
    

        let weight_status=false, height_status=false;

        if(Weight === '' || isNaN(Weight) || (Weight <=0) )
        {
            document.getElementById("weight_error").style.display="block";
        }
        else{
            document.getElementById("weight_error").style.display="";
            weight_status=true;
        }

        if(Height === '' || isNaN(Height) || (Height <=0) )
        {
            document.getElementById("height_error").style.display="block";
        }
        else{
            document.getElementById("height_error").innerHTML="";
            height_status=true;
        }


        var calculated_value= ( (Weight/(Height*Height))*10000 ).toFixed(2)
        console.log(calculated_value)
        Result.innerHTML = calculated_value

     if(calculated_value <= 18.4)
       {    Status.innerHTML= " You are Underweight" }
     else if(calculated_value >= 18.5 && calculated_value <= 24.9)
       { Status.innerHTML= " You are Normal" }
     else if(calculated_value >= 20.5 && calculated_value <= 39.9)
      {  Status.innerHTML= " You are Overweight" }
     else if( calculated_value >= 40.0 && calculated_value <= 1000)
       { Status.innerHTML= " You are Obease" }

    }


