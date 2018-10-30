import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent implements OnInit {
  constructor() {}

  ngOnInit(){


    $(document).ready(function(){
        $("button").click(function(){
            var div = $("div");
            div.animate({left: '100px'}, "slow");
        });
    });



    let callCount = 0;
    let setI = setInterval(function() {
      if (callCount < 5) {


        callCount = callCount+1;
        console.log("callCount:")
        console.log(callCount)
        //can't call functions from this scope???
        // let x = this.randNumStr(($(window).width() - $(".wordSize").width()));
        // let y = this.randNumStr(($(window).height() - $(".wordSize").height()));
        let x = Math.floor((Math.random() * ($(window).width() - $(".wordSize").width())) + 1).toString()
        let y = Math.floor((Math.random() * ($(window).height() - $(".wordSize").height())) + 1).toString()
        let sky = document.getElementsByClassName("sky")[0];
        let sprout = document.createElement("div");
        sprout.innerHTML = "SKY";
        sprout.classList.add("random")
        sky.appendChild(sprout);
        sprout.style.position = "absolute"
        sprout.style.left = x + "px"
        sprout.style.top = y + "px"


      } else {
        clearInterval(setI);
      }
    }, 400);
  }




  randNumStr(dem) {
    let x = Math.floor((Math.random() * dem) + 1);
    return x.toString();
  }



}
