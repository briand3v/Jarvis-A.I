import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  style: object = {
    position: 'relative',
    width: '100%',
    height: '100%',
    radius: 10
  };
  myStyle: object = {};
  params: object = {};
  width: Number = 100;
  height: Number = 100;
  constructor() {}

  ngOnInit() {
    this.myStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      'z-index': -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };

    this.params = {
      particles: {
        number: {
          value: 200
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 2,
            color: '#000000'
          }
        },
        move: {
          enable: true,
          speed: 8,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: true,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 200
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 1,
          width: 1
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'bubble'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 100,
            size: 10,
            duration: 1,
            opacity: 1,
            speed: 3
          }
        }
      }
    };
  }
}
