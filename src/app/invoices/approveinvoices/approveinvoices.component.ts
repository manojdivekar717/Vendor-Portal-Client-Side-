
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
  INVOICE_NUMBER:string;
  INVOICE_AMOUNT:string;
  INVOICE_DATE:string;
  GRN_NUMBER:number;
  PO_NUMBER:string;
  PROJECT:string;
  VENDOR_NAME:string;

  ACTION:string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {SR_NO:1, INVOICE_NUMBER:'In/1002',  INVOICE_AMOUNT:'15000', INVOICE_DATE:'11/3/2021', GRN_NUMBER: 20012 , PO_NUMBER:'sci/PO/001',PROJECT:'Test Project', VENDOR_NAME:'Test Vendor' ,ACTION:'edit'},
  {SR_NO:1, INVOICE_NUMBER:'In/1002',  INVOICE_AMOUNT:'15000', INVOICE_DATE:'11/3/2021', GRN_NUMBER: 20012 , PO_NUMBER:'sci/PO/001',PROJECT:'Test Project', VENDOR_NAME:'Test Vendor' ,ACTION:'edit'},
  {SR_NO:1, INVOICE_NUMBER:'In/1002',  INVOICE_AMOUNT:'15000', INVOICE_DATE:'11/3/2021', GRN_NUMBER: 20012 , PO_NUMBER:'sci/PO/001',PROJECT:'Test Project', VENDOR_NAME:'Test Vendor' ,ACTION:'edit'},
  {SR_NO:1, INVOICE_NUMBER:'In/1002',  INVOICE_AMOUNT:'15000', INVOICE_DATE:'11/3/2021', GRN_NUMBER: 20012 , PO_NUMBER:'sci/PO/001',PROJECT:'Test Project', VENDOR_NAME:'Test Vendor' ,ACTION:'edit'},
  {SR_NO:1, INVOICE_NUMBER:'In/1002',  INVOICE_AMOUNT:'15000', INVOICE_DATE:'11/3/2021', GRN_NUMBER: 20012 , PO_NUMBER:'sci/PO/001',PROJECT:'Test Project', VENDOR_NAME:'Test Vendor' ,ACTION:'edit'},
  {SR_NO:1, INVOICE_NUMBER:'In/1002',  INVOICE_AMOUNT:'15000', INVOICE_DATE:'11/3/2021', GRN_NUMBER: 20012 , PO_NUMBER:'sci/PO/001',PROJECT:'Test Project', VENDOR_NAME:'Test Vendor' ,ACTION:'edit'},
  
];



@Component({
  selector: 'app-approveinvoices',
  templateUrl: './approveinvoices.component.html',
  styleUrls: ['./approveinvoices.component.css']
})
export class ApproveinvoicesComponent implements AfterViewInit {

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
