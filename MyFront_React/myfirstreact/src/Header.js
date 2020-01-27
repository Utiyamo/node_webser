import React from 'react';
import './CSS/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return (
        <div>
            <ul className="tab-bar">
                <li data-num="1" className="tab wave dark">
                    <a href="/">Intro</a>
                </li>
                <li data-num="2" className="tab wave dark">
                    <a className="" href="/About/" data-new-state="About">About Me</a>
                </li>
                <li data-num="3" className="tab wave dark">
                    <a className="" href="/Work/" data-new-state="Work">My Works</a>
                </li>
                <li data-num="4" className="tab wave dark">
                    <a className="" href="/Contact/" data-new-state="Contact">Contacts</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;

var waveBtn = (function () {
    'use strict';
    var btn = document.querySelectorAll('.wave'),
        tab = document.querySelector('.tab-bar'),
        indicator = document.querySelector('.indicator'),
        indi = 0;
    indicator.style.marginLeft = indi + 'px';
  
    for(var i = 0; i < btn.length; i++) {
      btn[i].onmousedown = function (e) {
        var newRound = document.createElement('div'),x,y;
  
        newRound.className = 'cercle';
        this.appendChild(newRound);
  
        x = e.pageX - this.offsetLeft;
        y = e.pageY - this.offsetTop;
  
        newRound.style.left = x + "px";
        newRound.style.top = y + "px";
        newRound.className += " anim";
  
        indicator.style.marginLeft = indi + (this.dataset.num-1) * 150 + 'px';
  
        setTimeout(function() {
          newRound.remove();
        }, 1200);
      };
    }
  });