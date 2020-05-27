<?php


namespace App\Api\Controllers;


use App\SocialAccount;
use App\User;

class HomeController
{
    public function widget ()
    {


        $widgetToken = "1234234klsdjf";//$user->widget_token;

        $widgetCode = '
                    const div = document.createElement("div");
        const iconDiv = document.createElement("div");
        const widgetSideBarDiv = document.createElement("div");
        const flexBox = document.createElement("div");
        const body = document.querySelector("body");




         // ==================================== ICON DIV ========================


        const p = document.createElement("p");



        const img = document.createElement("img");
        img.setAttribute("src","https://yt3.ggpht.com/a/AATXAJz14ZPzRqz3EJ2VvEdsUahT2Gt77bB9N5Q6gQ=s900-c-k-c0xffffffff-no-rj-mo");
        img.setAttribute("width","50px");
        img.setAttribute("height","50px");


         iconDiv.appendChild(img);
         iconDiv.appendChild(p);




         // ==================================== WidgetSideBarDiv ========================




         widgetSideBarDiv.style.width="300px";
         widgetSideBarDiv.style.height="45vh";
         widgetSideBarDiv.style.backgroundColor="white";
         widgetSideBarDiv.style.overflowY= "scroll";
         widgetSideBarDiv.style.display = "none"




         // widgetSidebar top

         const sideBarTop = document.createElement("div");
         sideBarTop.style.width="100%";
         sideBarTop.style.height="39px";
         sideBarTop.style.display="flex";
         sideBarTop.style.justifyContent="center";
         sideBarTop.style.alignItems="center";
         sideBarTop.style.color="white";

         sideBarTop.style.backgroundColor="blue";
         const pTop = document.createElement("p");
         pTop.textContent="5 Star reviews";
         sideBarTop.append(pTop);


         // content div

         const sideBarContent = document.createElement("div");

       fetch("http://127.0.0.1:8000/api/widget-reviews").then(resp=>resp.json())
             .then(res=>{


          res.map(item=>{

         const itemDiv = document.createElement("div");

         const profileDiv = document.createElement("div");
         profileDiv.style.display="flex";
         const profileImg = document.createElement("img");

         //  =================================   Item div Review User Profile ===================

         profileImg.setAttribute("src",item.picture);
         profileImg.style.width="50px";
         profileImg.style.height="50px";
         profileImg.style.borderRadius="50%";



         profileDiv.append(profileImg);


         const nameP = document.createElement("p");
//  =================================   Item div Review User Name ===================

         nameP.style.marginLeft="5px";
         nameP.style.marginTop="15px";
          nameP.textContent=item.name.first + item.name.last;
         profileDiv.append(nameP);


       const reviewDiv = document.createElement("div");
         const dateDiv = document.createElement("div");

         const reviewsP = document.createElement("p");


         reviewDiv.style.padding="20px";


//  =================================   Item div Review Text ===================

         reviewsP.textContent=item.review;

        reviewDiv.append(reviewsP);

         const dateP = document.createElement("p");


         //  =================================   Item div Date Text ===================
         dateP.textContent="Today";
         dateDiv.append(dateP);
         dateDiv.style.color="blue";

         itemDiv.append(profileDiv);
         itemDiv.append(reviewDiv);
         itemDiv.append(dateDiv);










        itemDiv.style.marginBottom="7px";


        sideBarContent.append(itemDiv);
    })

    });





        widgetSideBarDiv.append(sideBarTop);
        widgetSideBarDiv.append(document.createElement("br"));
        widgetSideBarDiv.append(sideBarContent);

   //         ========================== OnClick Listener ======================


         iconDiv.onclick=()=>{

            if(widgetSideBarDiv.style.display === \'none\'){
               widgetSideBarDiv.style.display = "block"
            }else{
               widgetSideBarDiv.style.display = "none"
            }

         }



//         ========================== APPEND DIV ======================


         flexBox.appendChild(iconDiv);
         flexBox.appendChild(widgetSideBarDiv);
         div.appendChild(flexBox);
         body.append(div);

//         ========================== DIV STYLES ======================
        div.style.cssText = "cursor:pointer; z-index:9999999; bottom:100px; position:fixed; right:20px";
        flexBox.style.display="flex";
        flexBox.style.alignContent="center";
        flexBox.style.alignItems="center";
        div.style.transition="all 2s ease";

 ';

      return  \Response::make($widgetCode, '200')->header('Content-Type', 'text/javascript');
    }





}

// width:450px; !important;height:75vh !important;