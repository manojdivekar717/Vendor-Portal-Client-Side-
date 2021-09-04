
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
  SR_NO: number;
  GRN_NUMBER:number;
  DATE:string;
  PROJECT_NAME:string;
  PO_NUMBER:number;
  VENDOR_NAME:string;
  STATUS:string;
  RECEIVED_BY:string;
  ACTION:string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {SR_NO:1, GRN_NUMBER: 1234 , DATE:'11/3/2021',  PROJECT_NAME:'Name Surname', PO_NUMBER:3, VENDOR_NAME:'Name Suname', STATUS:'Active',RECEIVED_BY:'abc' ,ACTION:'edit'},
  {SR_NO:1, GRN_NUMBER: 1234 , DATE:'11/3/2021',  PROJECT_NAME:'Name Surname', PO_NUMBER:3, VENDOR_NAME:'Name Suname', STATUS:'Active',RECEIVED_BY:'abc' ,ACTION:'edit'},
  {SR_NO:1, GRN_NUMBER: 1234 , DATE:'11/3/2021',  PROJECT_NAME:'Name Surname', PO_NUMBER:3, VENDOR_NAME:'Name Suname', STATUS:'Active',RECEIVED_BY:'abc' ,ACTION:'edit'},
  {SR_NO:1, GRN_NUMBER: 1234 , DATE:'11/3/2021',  PROJECT_NAME:'Name Surname', PO_NUMBER:3, VENDOR_NAME:'Name Suname', STATUS:'Active',RECEIVED_BY:'abc' ,ACTION:'edit'},
  {SR_NO:1, GRN_NUMBER: 1234 , DATE:'11/3/2021',  PROJECT_NAME:'Name Surname', PO_NUMBER:3, VENDOR_NAME:'Name Suname', STATUS:'Active',RECEIVED_BY:'abc' ,ACTION:'edit'},
  {SR_NO:1, GRN_NUMBER: 1234 , DATE:'11/3/2021',  PROJECT_NAME:'Name Surname', PO_NUMBER:3, VENDOR_NAME:'Name Suname', STATUS:'Active',RECEIVED_BY:'abc' ,ACTION:'edit'}
 
];


@Component({
  selector: 'app-grn',
  templateUrl: './grn.component.html',
  styleUrls: ['./grn.component.css']
})
export class GRNComponent implements AfterViewInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
constructor(private breakpointObserver: BreakpointObserver ) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  
  displayedColumns: string[] = [ 'SR_NO', 'GRN_NUMBER', 'DATE', 'PROJECT_NAME','PO_NUMBER','VENDOR_NAME','STATUS','RECEIVED_BY','ACTION'];
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
