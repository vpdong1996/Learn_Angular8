import { Component, OnInit } from '@angular/core';
import {
  animation, trigger, animateChild, group,
  transition, animate, style, query, state
} from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('isChange', [
      state('default', style({
        backgroundColor: 'pink',
        width: '200px',
        height: '200px'
      })),
      state('onAni', style({
        backgroundColor: 'lime',
        opacity: 0.5,
        width: '100px',
        height: '100px',
        transform: 'translateX(180px) rotate(90deg)'
      })),
      transition('default => onAni', [
        animate('1s ease-out')
      ]),
      transition('onAni => default', [
        animate('0.5s')
      ])
    ]),
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate('1s'))
    ]),
    trigger('EnterLeave', [
      state('flyIn', style({
        transform: 'translateX(0)'
      })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class AnimationComponent implements OnInit {
  isChanged: boolean = false;
  listItems: Array<string> = [];
  list_order: number = 1;

  addItem() {
    const listItem = `Item --- ${this.list_order}`
    this.list_order++;
    this.listItems.push(listItem);
  }

  removeItem() {
    this.listItems.length -= 1;
  }

  onChange() {
    this.isChanged = !this.isChanged
  }

  ngOnInit() {
  }

}


