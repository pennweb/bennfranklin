// preload images used in menu and toolbar rollovers

if (document.images)
   {
   // menu 

 
ben1 = new Image(175,20);
   ben1.src = "images/nav/ben-on.gif";
   ben2 = new Image(175,20);
   ben2.src = "images/nav/ben-off.gif";

celebration1 = new Image(175,20);
   celebration1.src = "images/nav/celebration-on.gif";
   celebration2 = new Image(175,20);
   celebration2.src = "images/nav/celebration-off.gif";
 
  
   contact1 = new Image(175,20);
   contact1.src = "images/nav/contact-on.gif";
   contact2 = new Image(175,20);
   contact2.src = "images/nav/contact-off.gif";
   
    benevents1 = new Image(175,20);
    benevents1.src = "images/nav/benevents-on.gif";
   benevents2 = new Image(175,20);
    benevents2.src = "images/nav/benevents-off.gif";
  

   // toolbar

   home1 = new Image(28,23);
   home1.src = "images/toolbar/home1.gif";
   home2 = new Image(28,23);
   home2.src = "images/toolbar/home2.gif";

   az1 = new Image(44,23);
   az1.src = "images/toolbar/az1.gif";
   az2 = new Image(44,23);
   az2.src = "images/toolbar/az2.gif";

   directories1 = new Image(54,23);
   directories1.src = "images/toolbar/directories1.gif";
   directories2 = new Image(54,23);
   directories2.src = "images/toolbar/directories2.gif";

   calendar1 = new Image(45,23);
   calendar1.src = "images/toolbar/calendar1.gif";
   calendar2 = new Image(45,23);
   calendar2.src = "images/toolbar/calendar2.gif";

   maps1 = new Image(27,23);
   maps1.src = "images/toolbar/maps1.gif";
   maps2 = new Image(27,23);
   maps2.src = "images/toolbar/maps2.gif";

   search1 = new Image(33,23);
   search1.src = "images/toolbar/search1.gif";
   search2 = new Image(33,23);
   search2.src = "images/toolbar/search2.gif";

   advanced1 = new Image(72,23);
   advanced1.src = "images/toolbar/advanced1a.gif";
   advanced2 = new Image(72,23);
   advanced2.src = "images/toolbar/advanced2a.gif";
   }

// simple image replacement

function imgSwap(imgDocID,imgObjName)
   {
   if (document.images)
      {
      document.images[imgDocID].src = eval(imgObjName + ".src")
      }
   }
