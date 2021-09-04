
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
  INVOICE_NUMBER:number;
  INVOICE_AMOUNT:number;
  INVOICE_DATE:string;
  GRN_NUMBER:number;
  PO_NUMBER:number;
  PROJECT:string;
  VENDOR_NAME:string;
  ACTION:string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {SR_NO:1, INVOICE_NUMBER: 1234 , INVOICE_AMOUNT: 11,  INVOICE_DATE:'11/08/2021', GRN_NUMBER:3, PO_NUMBER:123,PROJECT:'Test Project', VENDOR_NAME:'Name Suname', ACTION:'edit'},
  {SR_NO:1, INVOICE_NUMBER: 1234 , INVOICE_AMOUNT: 11,  INVOICE_DATE:'11/08/2021', GRN_NUMBER:3, PO_NUMBER:123,PROJECT:'Test Project', VENDOR_NAME:'Name Suname', ACTION:'edit'},
  {SR_NO:1, INVOICE_NUMBER: 1234 , INVOICE_AMOUNT: 11,  INVOICE_DATE:'11/08/2021', GRN_NUMBER:3, PO_NUMBER:123,PROJECT:'Test Project', VENDOR_NAME:'Name Suname', ACTION:'edit'},
  {SR_NO:1, INVOICE_NUMBER: 1234 , INVOICE_AMOUNT: 11,  INVOICE_DATE:'11/08/2021', GRN_NUMBER:3, PO_NUMBER:123,PROJECT:'Test Project', VENDOR_NAME:'Name Suname', ACTION:'edit'},
  {SR_NO:1, INVOICE_NUMBER: 1234 , INVOICE_AMOUNT: 11,  INVOICE_DATE:'11/08/2021', GRN_NUMBER:3, PO_NUMBER:123,PROJECT:'Test Project', VENDOR_NAME:'Name Suname', ACTION:'edit'},
  {SR_NO:1, INVOICE_NUMBER: 1234 , INVOICE_AMOUNT: 11,  INVOICE_DATE:'11/08/2021', GRN_NUMBER:3, PO_NUMBER:123,PROJECT:'Test Project', VENDOR_NAME:'Name Suname', ACTION:'edit'}
 
];


@Component({
  selector: 'app-approve-grn',
  templateUrl: './approve-grn.component.html',
  styleUrls: ['./approve-grn.component.css']
})
export class ApproveGrnComponent implements AfterViewInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
constructor(private breakpointObserver: BreakpointObserver ) {}
ngAfterViewInit(): void {
  throw new Error('Method not implemented.');
}

displayedColumns: string[] = [ 'SR_NO', 'INVOICE_NUMBER', 'INVOICE_AMOUNT', 'INVOICE_DATE','GRN_NUMBER','PO_NUMBER','PROJECT','VENDOR_NAME','ACTION'];
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
