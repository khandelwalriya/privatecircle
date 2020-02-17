import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-list-element-detail',
  templateUrl: './list-element-detail.component.html',
  styleUrls: ['./list-element-detail.component.css']
})
export class ListElementDetailComponent implements OnInit {

  @Input() data;
  
  constructor() { }

  ngOnInit() {
  }

}
