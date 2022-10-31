import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imageList: any[] = [
    { url: 'https://i.ibb.co/wBYDxLq/beach.jpg', title: 'Beach Houses' },
  ];

  mode = 'one';
  startFrom = 0;

  constructor() {}

  handleExit(ev) {
    console.log(`&&& ev: ${JSON.stringify(ev)}`);
    const keys = Object.keys(ev);
    if (keys.includes('result') && ev.result) {
      if (keys.includes('imageIndex')) {
        console.log(`last image index: ${ev.imageIndex}`);
      }
    }
    if (keys.includes('message')) {
      console.log(`returned message: ${ev.message}`);
    }
  }
}
