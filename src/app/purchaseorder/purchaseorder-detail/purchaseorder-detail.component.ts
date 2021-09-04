import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  SR_NO:number;
  GRN_NUMBER:string;
  DATE:string;
  VENDOR_NAME:string;
  RECEIVED_BY:string;
  STATUS:string;
  ACTION:string;
}
export interface Element {
  SR_NO:number;
  INVOICE_NUMBER:string;
  INVOICE_AMOUNT:string;
  INVOICE_DATE:string;
  GRN_NUMBER:number;
  STATUS:string;
  STATUSPU:string;
  DUE_DATE:string;
  ACTION:string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {SR_NO:1, GRN_NUMBER: '', DATE:'30/12/2021', VENDOR_NAME:'Name Surname',  STATUS:'Active',RECEIVED_BY:'', ACTION:'edit'},
  {SR_NO:1, GRN_NUMBER: '', DATE:'30/12/2021', VENDOR_NAME:'Name Surname',  STATUS:'Active',RECEIVED_BY:'', ACTION:'edit'},
  {SR_NO:1, GRN_NUMBER: '', DATE:'30/12/2021', VENDOR_NAME:'Name Surname',  STATUS:'Active',RECEIVED_BY:'', ACTION:'edit'},
  {SR_NO:1, GRN_NUMBER: '', DATE:'30/12/2021', VENDOR_NAME:'Name Surname',  STATUS:'Active',RECEIVED_BY:'', ACTION:'edit'},
  {SR_NO:1, GRN_NUMBER: '', DATE:'30/12/2021', VENDOR_NAME:'Name Surname',  STATUS:'Active',RECEIVED_BY:'', ACTION:'edit'},
  {SR_NO:1, GRN_NUMBER: '', DATE:'30/12/2021', VENDOR_NAME:'Name Surname',  STATUS:'Active',RECEIVED_BY:'', ACTION:'edit'},
 
];
const ELEMENT: Element[] = [
  {SR_NO:1, INVOICE_NUMBER: '', INVOICE_AMOUNT:'', INVOICE_DATE:'30/12/2021', GRN_NUMBER:5, STATUS:'Active',STATUSPU:'paid',DUE_DATE:'' ,ACTION:'edit'},
  {SR_NO:1, INVOICE_NUMBER: '', INVOICE_AMOUNT:'', INVOICE_DATE:'30/12/2021', GRN_NUMBER:5, STATUS:'Active',STATUSPU:'paid',DUE_DATE:'' ,ACTION:'edit'},
  {SR_NO:1, INVOICE_NUMBER: '', INVOICE_AMOUNT:'', INVOICE_DATE:'30/12/2021', GRN_NUMBER:5, STATUS:'Active',STATUSPU:'paid',DUE_DATE:'' ,ACTION:'edit'},
  {SR_NO:1, INVOICE_NUMBER: '', INVOICE_AMOUNT:'', INVOICE_DATE:'30/12/2021', GRN_NUMBER:5, STATUS:'Active',STATUSPU:'paid',DUE_DATE:'' ,ACTION:'edit'},
  {SR_NO:1, INVOICE_NUMBER: '', INVOICE_AMOUNT:'', INVOICE_DATE:'30/12/2021', GRN_NUMBER:5, STATUS:'Active',STATUSPU:'paid',DUE_DATE:'' ,ACTION:'edit'},
  {SR_NO:1, INVOICE_NUMBER: '', INVOICE_AMOUNT:'', INVOICE_DATE:'30/12/2021', GRN_NUMBER:5, STATUS:'Active',STATUSPU:'paid',DUE_DATE:'' ,ACTION:'edit'},
  
];
@Component({
  selector: 'app-purchaseorder-detail',
  templateUrl: './purchaseorder-detail.component.html',
  styleUrls: ['./purchaseorder-detail.component.css']
})
export class PurchaseorderDetailComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
constructor(private breakpointObserver: BreakpointObserver) { }

ngAfterViewInit(): void {
  throw new Error('Method not implemented.');
}

displayedColumns: string[] = [ 'SR_NO', 'GRN_NUMBER', 'DATE', 'VENDOR_NAME','STATUS','RECEIVED_BY','ACTION'];

dataSource = new MatTableDataSource<PeriodicElement>( ELEMENT_DATA) ;
checked = false;

displayedColumnsdata: string[] = [ 'SR_NO', 'INVOICE_NUMBER', 'INVOICE_AMOUNT', 'INVOICE_DATE','GRN_NUMBER','STATUS','STATUSPU','DUE_DATE','ACTION'];

data = new MatTableDataSource<Element>( ELEMENT) ;




@ViewChild(MatPaginator)
paginator!: MatPaginator;

ELEMENT_DATA: any;
// @ViewChild(MatPaginator)
// paginators!: MatPaginator;
ELEMENT: any;
@ViewChild('TableTwoPaginator', {static: true}) tableTwoPaginator!: MatPaginator;


ngOnInit(): void {

  setTimeout(()=> this.dataSource.paginator=this.paginator);
  this.data.paginator = this.tableTwoPaginator;
  // setTimeout(()=> this.data.paginator=this.paginators);
}

}
