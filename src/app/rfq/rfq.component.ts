
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {SelectionModel} from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MultiComboInputInputTagsMode } from 'smart-webcomponents-angular';

 
export interface PeriodicElement {
  RFQ_TITLE:string;
 
  SR_NO:number;
  VENDOR_CATEGORY:string;
  PUBLISH_ON:string;
  START_DATE:string;
  END_DATE:string;
  STATUS:string;
  ACTION:string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {SR_NO:1, RFQ_TITLE: 'Name Surname', VENDOR_CATEGORY:'B2B',  PUBLISH_ON:'30/12/2021', START_DATE:'30/12/2021',END_DATE:'30/12/2021', STATUS:'Active', ACTION:'edit'},
  {SR_NO:2, RFQ_TITLE: 'Name Surname', VENDOR_CATEGORY:'B2B',  PUBLISH_ON:'30/12/2021', START_DATE:'30/12/2021',END_DATE:'30/12/2021', STATUS:'Active', ACTION:'edit'},
  {SR_NO:3, RFQ_TITLE: 'Name Surname', VENDOR_CATEGORY:'B2B',  PUBLISH_ON:'30/12/2021', START_DATE:'30/12/2021',END_DATE:'30/12/2021', STATUS:'Active', ACTION:'edit'},
  {SR_NO:4, RFQ_TITLE: 'Name Surname', VENDOR_CATEGORY:'B2B',  PUBLISH_ON:'30/12/2021', START_DATE:'30/12/2021',END_DATE:'30/12/2021', STATUS:'Active', ACTION:'edit'},
  {SR_NO:5, RFQ_TITLE: 'Name Surname', VENDOR_CATEGORY:'B2B',  PUBLISH_ON:'30/12/2021', START_DATE:'30/12/2021',END_DATE:'30/12/2021', STATUS:'Active', ACTION:'edit'},
  {SR_NO:6, RFQ_TITLE: 'Name Surname', VENDOR_CATEGORY:'B2B',  PUBLISH_ON:'30/12/2021', START_DATE:'30/12/2021',END_DATE:'30/12/2021', STATUS:'Active', ACTION:'edit'},
  
];
@Component({
  selector: 'app-rfq',
  templateUrl: './rfq.component.html',
  styleUrls: ['./rfq.component.css']
})
export class RFQComponent implements AfterViewInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
constructor(private breakpointObserver: BreakpointObserver ) {}
ngAfterViewInit(): void {
  throw new Error('Method not implemented.');
}

displayedColumns: string[] = [ 'SR_NO', 'RFQ_TITLE', 'VENDOR_CATEGORY', 'PUBLISH_ON','START_DATE','END_DATE','STATUS','ACTION'];
selection = new SelectionModel<PeriodicElement>(true, []);
dataSource = new MatTableDataSource<PeriodicElement>( ELEMENT_DATA) ;
checked = false;




@ViewChild(MatPaginator)
paginator!: MatPaginator;
head: any;
ELEMENT_DATA: any;



ngOnInit(): void {

  setTimeout(()=> this.dataSource.paginator=this.paginator);
}

applyFilter(filterValue:string) { 
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


}
