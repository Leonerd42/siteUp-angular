import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-img',
  templateUrl: './card-img.component.html',
  styleUrls: ['./card-img.component.css']
})
export class CardImgComponent implements OnInit {

  @Input() src: string;
  @Input() message: string; 
  
  constructor() { }

  ngOnInit() {
  }

}
