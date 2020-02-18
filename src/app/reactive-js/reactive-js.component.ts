import { Component, OnInit } from '@angular/core';
import {fromEvent, Observable} from 'rxjs';

export class IconWithBadge {
  symbol: string;
  count: number;
  color: string;
  position?: string;
  size?: string;
}

@Component({
  selector: 'app-reactive-js',
  templateUrl: './reactive-js.component.html',
  styleUrls: ['./reactive-js.component.css']
})
export class ReactiveJsComponent implements OnInit {

  iconList: IconWithBadge[] = [
    {symbol: 'home', count: 15, color: 'warn'},
    {symbol: 'bookmark', count: 7, color: 'primary'},
    {symbol: 'cached', count: 13, color: 'accent'},
    {symbol: 'dashboard', count: 9, color: 'primary'}
  ];
  constructor() { }

  ngOnInit(): void {

    // this.mouseLog();

    const obs = new Observable((observer: any) => {
      observer.next('welcome back developer');
      observer.next('welcome back developer again');
      observer.next('welcome back developer again and again');
      observer.next('now there are 4 things');
    });

    obs.subscribe(x => this.addToList(x));

    obs.subscribe(y => console.log('second sub', y));
  }

  evntClick() {
    const rnd = Math.random();
    console.log(Math.floor(rnd  * 100));
  }

  addToList(value: any) {
    const node = document.createElement('li');
    node.appendChild(document.createTextNode(value));
    console.log(node);
    document.getElementById('obs-list').appendChild(node);
  }

  mouseLog() {
    fromEvent(document.body, 'mousemove')
      .subscribe((e: any) => console.log(e.pageX, e.pageY));
  }

}
