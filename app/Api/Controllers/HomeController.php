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

        p.textContent="Reviews";

        const img = document.createElement("img");
        img.setAttribute("src","https://yt3.ggpht.com/a/AATXAJz14ZPzRqz3EJ2VvEdsUahT2Gt77bB9N5Q6gQ=s900-c-k-c0xffffffff-no-rj-mo");
        img.setAttribute("width","50px");
        img.setAttribute("height","50px");


         iconDiv.appendChild(img);
         iconDiv.appendChild(p);




         // ==================================== WidgetSideBarDiv ========================




         widgetSideBarDiv.style.width="60vw";
         widgetSideBarDiv.style.height="60vh";
         widgetSideBarDiv.style.backgroundColor="green";
         widgetSideBarDiv.style.overflowY= "scroll";
         widgetSideBarDiv.style.display = "none"

         p.textContent="Widget Side Bar";

         widgetSideBarDiv.append(p);




   //         ========================== OnClick Listener ======================


         iconDiv.onclick=()=>{
         console.log("listen iconDiv");
            if(widgetSideBarDiv.style.display === \'none\'){
               widgetSideBarDiv.style.display = "flex"
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