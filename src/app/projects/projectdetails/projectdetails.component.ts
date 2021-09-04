import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  SR_NO: number;
  P_O_NUMBER:string;
  VENDOR_NAME:string;
  DATE:string;
  P_O_AMOUNTS:string;
  TOTAL_GRNS:number;
  TOTAL_INVOICE:string;
  PENDING_PAYMENT:string;
  P_O_STATUS:string;
  ACTIONS:string;
}
export interface Element {
  SR_NO:number;
  GRN_NUMBER:string;
  DATE:string;
  P_O_NUMBER:string;
  VENDOR_NAME:string;
  STATUS:string;
  RECIEVED_BY:string;
  ACTIONS:string;
}

export interface Periodic {
  SR_NO:number;
  INVOICE_NUMBER:string;
  INVOICE_AMOUNT:string;
  INVOICE_DATE:string;
  GRN_NUMBER:number;
  PO_NUMBER:number;
  VENDOR_NAME:string;
  STATUS:string;
  STATUSPU:string;
  ACTION:string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {SR_NO:1, P_O_NUMBER:'Test-123' , VENDOR_NAME:'Name Surname',  DATE:'30/12/2021', P_O_AMOUNTS:'10000', TOTAL_GRNS: 5, TOTAL_INVOICE:'',PENDING_PAYMENT:'', P_O_STATUS:'Active',ACTIONS:''},
  {SR_NO:1, P_O_NUMBER:'Test-123' , VENDOR_NAME:'Name Surname',  DATE:'30/12/2021', P_O_AMOUNTS:'' , TOTAL_GRNS: 5, TOTAL_INVOICE:'',PENDING_PAYMENT:'', P_O_STATUS:'Active',ACTIONS:''},
  {SR_NO:1, P_O_NUMBER:'Test-123' , VENDOR_NAME:'Name Surname',  DATE:'30/12/2021', P_O_AMOUNTS:'' , TOTAL_GRNS: 5, TOTAL_INVOICE:'',PENDING_PAYMENT:'', P_O_STATUS:'Active',ACTIONS:''},
  {SR_NO:1, P_O_NUMBER:'Test-123' , VENDOR_NAME:'Name Surname',  DATE:'30/12/2021', P_O_AMOUNTS:'' , TOTAL_GRNS: 5, TOTAL_INVOICE:'',PENDING_PAYMENT:'', P_O_STATUS:'Active',ACTIONS:''},
  {SR_NO:1, P_O_NUMBER:'Test-123' , VENDOR_NAME:'Name Surname',  DATE:'30/12/2021', P_O_AMOUNTS:'' , TOTAL_GRNS: 5, TOTAL_INVOICE:'',PENDING_PAYMENT:'', P_O_STATUS:'Active',ACTIONS:''},
  {SR_NO:1, P_O_NUMBER:'Test-123' , VENDOR_NAME:'Name Surname',  DATE:'30/12/2021', P_O_AMOUNTS:'' , TOTAL_GRNS: 5, TOTAL_INVOICE:'',PENDING_PAYMENT:'', P_O_STATUS:'Active',ACTIONS:''},
  {SR_NO:1, P_O_NUMBER:'Test-123' , VENDOR_NAME:'Name Surname',  DATE:'30/12/2021', P_O_AMOUNTS:'' , TOTAL_GRNS: 5, TOTAL_INVOICE:'',PENDING_PAYMENT:'', P_O_STATUS:'Active',ACTIONS:''},
  {SR_NO:1, P_O_NUMBER:'Test-123' , VENDOR_NAME:'Name Surname',  DATE:'30/12/2021', P_O_AMOUNTS:'' , TOTAL_GRNS: 5, TOTAL_INVOICE:'',PENDING_PAYMENT:'', P_O_STATUS:'Active',ACTIONS:''},
  {SR_NO:1, P_O_NUMBER:'Test-123' , VENDOR_NAME:'Name Surname',  DATE:'30/12/2021', P_O_AMOUNTS:'' , TOTAL_GRNS: 5, TOTAL_INVOICE:'',PENDING_PAYMENT:'', P_O_STATUS:'Active',ACTIONS:''},
 
];

const ELEMENT: Element[] = [
  {SR_NO:1 , GRN_NUMBER: '5' , DATE:'28/10/1998' ,  P_O_NUMBER:'Test-123' , VENDOR_NAME:'Name Surname' , STATUS:'Active' , RECIEVED_BY:'Name Surname' ,  ACTIONS:''},
  {SR_NO:1 , GRN_NUMBER: '5' , DATE:'28/10/1998' ,  P_O_NUMBER:'Test-123' , VENDOR_NAME:'Name Surname' , STATUS:'Active' , RECIEVED_BY:'Name Surname' ,  ACTIONS:''},
  {SR_NO:1 , GRN_NUMBER: '5' , DATE:'28/10/1998' ,  P_O_NUMBER:'Test-123' , VENDOR_NAME:'Name Surname' , STATUS:'Active' , RECIEVED_BY:'Name Surname' ,  ACTIONS:''},
  {SR_NO:1 , GRN_NUMBER: '5' , DATE:'28/10/1998' ,  P_O_NUMBER:'Test-123' , VENDOR_NAME:'Name Surname' , STATUS:'Active' , RECIEVED_BY:'Name Surname' ,  ACTIONS:''},
  {SR_NO:1 , GRN_NUMBER: '5' , DATE:'28/10/1998' ,  P_O_NUMBER:'Test-123' , VENDOR_NAME:'Name Surname' , STATUS:'Active' , RECIEVED_BY:'Name Surname' ,  ACTIONS:''},
  {SR_NO:1 , GRN_NUMBER: '5' , DATE:'28/10/1998' ,  P_O_NUMBER:'Test-123' , VENDOR_NAME:'Name Surname' , STATUS:'Active' , RECIEVED_BY:'Name Surname' ,  ACTIONS:''},
 
 
];
const DATA: Periodic[] = [
  {SR_NO:1, INVOICE_NUMBER: '', INVOICE_AMOUNT:'',  INVOICE_DATE:'28/10/1998', GRN_NUMBER:3, PO_NUMBER:12, VENDOR_NAME:'Name Surname', STATUS:'Active',STATUSPU:'paid', ACTION:'edit'},
  {SR_NO:1, INVOICE_NUMBER: '', INVOICE_AMOUNT:'',  INVOICE_DATE:'28/10/1998', GRN_NUMBER:3, PO_NUMBER:12, VENDOR_NAME:'Name Surname', STATUS:'Active',STATUSPU:'paid', ACTION:'edit'},
  {SR_NO:1, INVOICE_NUMBER: '', INVOICE_AMOUNT:'',  INVOICE_DATE:'28/10/1998', GRN_NUMBER:3, PO_NUMBER:12, VENDOR_NAME:'Name Surname', STATUS:'Active',STATUSPU:'paid', ACTION:'edit'},
  {SR_NO:1, INVOICE_NUMBER: '', INVOICE_AMOUNT:'',  INVOICE_DATE:'28/10/1998', GRN_NUMBER:3, PO_NUMBER:12, VENDOR_NAME:'Name Surname', STATUS:'Active',STATUSPU:'paid', ACTION:'edit'},
  {SR_NO:1, INVOICE_NUMBER: '', INVOICE_AMOUNT:'',  INVOICE_DATE:'28/10/1998', GRN_NUMBER:3, PO_NUMBER:12, VENDOR_NAME:'Name Surname', STATUS:'Active',STATUSPU:'paid', ACTION:'edit'},
  {SR_NO:1, INVOICE_NUMBER: '', INVOICE_AMOUNT:'',  INVOICE_DATE:'28/10/1998', GRN_NUMBER:3, PO_NUMBER:12, VENDOR_NAME:'Name Surname', STATUS:'Active',STATUSPU:'paid', ACTION:'edit'},
  
];

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {

  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  
  displayedColumns: string[] = [ 'SR_NO', 'P_O_NUMBER', 'VENDOR_NAME', 'DATE','P_O_AMOUNTS','TOTAL_GRNS','TOTAL_INVOICE','PENDING_PAYMENT','P_O_STATUS','ACTIONS'];

  dataSource = new MatTableDataSource<PeriodicElement>( ELEMENT_DATA) ;
  checked = false;
  
  displayedColumnsdata: string[] = [ 'SR_NO', 'GRN_NUMBER', 'DATE', 'P_O_NUMBER','VENDOR_NAME','STATUS','RECIEVED_BY','ACTIONS'];
 
  data = new MatTableDataSource<Element>( ELEMENT) ;
 
  displayedColumnsthree: string[] = [ 'SR_NO', 'INVOICE_NUMBER', 'INVOICE_AMOUNT', 'INVOICE_DATE','GRN_NUMBER','PO_NUMBER','VENDOR_NAME','STATUS','STATUSPU','ACTION'];
 
  data3 = new MatTableDataSource<Periodic>( DATA) ;
 
  
  
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ELEMENT_DATA: any;
  // @ViewChild(MatPaginator)
  // paginators!: MatPaginator;
  ELEMENT: any;
  DATA: any;
  @ViewChild('TableTwoPaginator', {static: true}) tableTwoPaginator!: MatPaginator;
  @ViewChild('TableThreePaginator', {static: true}) tableThreePaginator!: MatPaginator;
  
  
  ngOnInit(): void {
  
    setTimeout(()=> this.dataSource.paginator=this.paginator);
    this.data.paginator = this.tableTwoPaginator;
    this.data3.paginator = this.tableThreePaginator;
    // setTimeout(()=> this.data.paginator=this.paginators);
  }
}
