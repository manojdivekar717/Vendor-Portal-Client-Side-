
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
 
  SR_NO:number;
  VENDOR:string;
  CONTACT_PERSON:string;
  MOBILE_NUMBER:number;
  EMAIL:string;
  STATE:string;
  CATEGORY:string;
  ACTIVE_PO:string;
  PENDING_PAYMENT:number;
  DUE_AMOUNT:number;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {SR_NO:1, VENDOR: 'Name Surname', CONTACT_PERSON:'',  MOBILE_NUMBER:9999999999, EMAIL:'test@gmail.com', STATE:'state/city', CATEGORY:'A',ACTIVE_PO:'',PENDING_PAYMENT:10987,DUE_AMOUNT:1098},
  {SR_NO:2, VENDOR: 'Name Surname', CONTACT_PERSON:'',  MOBILE_NUMBER:9999999999, EMAIL:'test@gmail.com', STATE:'state/city', CATEGORY:'A',ACTIVE_PO:'',PENDING_PAYMENT:10987,DUE_AMOUNT:1098},
  {SR_NO:3, VENDOR: 'Name Surname', CONTACT_PERSON:'',  MOBILE_NUMBER:9999999999, EMAIL:'test@gmail.com', STATE:'state/city', CATEGORY:'A',ACTIVE_PO:'',PENDING_PAYMENT:10987,DUE_AMOUNT:1098},
  {SR_NO:4, VENDOR: 'Name Surname', CONTACT_PERSON:'',  MOBILE_NUMBER:9999999999, EMAIL:'test@gmail.com', STATE:'state/city', CATEGORY:'A',ACTIVE_PO:'',PENDING_PAYMENT:10987,DUE_AMOUNT:1098},
  {SR_NO:5, VENDOR: 'Name Surname', CONTACT_PERSON:'',  MOBILE_NUMBER:9999999999, EMAIL:'test@gmail.com', STATE:'state/city', CATEGORY:'A',ACTIVE_PO:'',PENDING_PAYMENT:10987,DUE_AMOUNT:1098},
  {SR_NO:6, VENDOR: 'Name Surname', CONTACT_PERSON:'',  MOBILE_NUMBER:9999999999, EMAIL:'test@gmail.com', STATE:'state/city', CATEGORY:'A',ACTIVE_PO:'',PENDING_PAYMENT:10987,DUE_AMOUNT:1098},
  
];


@Component({
  selector: 'app-allvendors',
  templateUrl: './allvendors.component.html',
  styleUrls: ['./allvendors.component.css']
})
export class AllvendorsComponent implements  AfterViewInit {


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
constructor(private breakpointObserver: BreakpointObserver ) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  
  displayedColumns: string[] = [ 'SR_NO', 'VENDOR', 'CONTACT_PERSON', 'MOBILE_NUMBER','EMAIL','STATE','CATEGORY','ACTIVE_PO','PENDING_PAYMENT','DUE_AMOUNT'];
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
