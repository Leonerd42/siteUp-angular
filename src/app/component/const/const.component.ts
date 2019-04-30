import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-const',
  templateUrl: './const.component.html',
  styleUrls: ['./const.component.css']
})
export class ConstComponent implements OnInit {

  pageName: string;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          this.pageName = params['id'];
      });
  }

}
