import { Component, OnInit } from '@angular/core';
import list from '../list.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  title = 'privatecircle-assignment';
  listData;
  selectedRowData;
  searchInput;
  selectedRowIndex=-1;

  ngOnInit() {
    this.listData = list;
  }

  showDetails(data,index){
    this.selectedRowData = data;
    this.selectedRowIndex = index;
  }
}
