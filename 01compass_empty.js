//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
        heading = e.webkitCompassHeading;
        alpha = e.alpha;
        if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = e.alpha;
        }

        if(compassHeading > 345 || compassHeading < 45) {
        text_area.textContent = "It is a curryhouse named SANLUH.";
        } 

        if(compassHeading >= 45 && compassHeading < 57) {
        text_area.textContent = compassHeading;
        }

        if(compassHeading >= 57 && compassHeading < 117) {  
        text_area.textContent = "It is always hollow around that street corner. I never see other people. It is always me and a fat hand which belongs to whoever stands behind those greasy, blur windows.";
        } 

        if(compassHeading >= 117 && compassHeading < 129) {
        text_area.textContent = compassHeading;
        }

        if(compassHeading >= 129 && compassHeading < 189) {
        text_area.textContent = "xxxxxxMENUxxxxxx CurryChickenRice/Noodle, CurryBeefRice/Noodle, CurryMeatballRice/Noodle,CurryBreadRice, CurryOmeletRice, CurryMusselRice, CurryDuckRice/Noodle, CurrySpicyRice/Noodle, CurryCarrotRice/Noodle, CurryOfChoice.";
        }

        if(compassHeading >= 189 && compassHeading < 201) {
        text_area.textContent = compassHeading;
        }

        if(compassHeading >= 201 && compassHeading < 261) {
        text_area.textContent = "That fat takes cash, and the same hand hands out food using plates smelled like old wet towels. The table sticks. The floor is slippery. The light flickers. This restaurant is shit.";
        }

        if(compassHeading >= 261 && compassHeading < 273) {
        text_area.textContent = compassHeading;
        }

        if(compassHeading >= 273 && compassHeading < 333) {
        text_area.textContent = "I kept goin";
        }

        if(compassHeading >= 333 && compassHeading < 345) {
        text_area.textContent = compassHeading;
        }


//"&& is and" "||" is or        
 
        //calls function to alter content based on heading
       // myOrientation();
    }

//device orientation that can track orientation on space
	window.addEventListener('deviceorientation', oriented, false);
    


//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");


    function myOrientation(){
     
            text_area.textContent = "empty compass";
        
	}


