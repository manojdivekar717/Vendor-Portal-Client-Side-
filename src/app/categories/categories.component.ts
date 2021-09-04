
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
  CATEGORY_ID:string;
  CATEGORY_NAME:string;
  CREATED_ON:string;
  TOTAL_VENDORS:number;
  CATEGORY_DETAILS:string;
  STATUS:string;

}



const ELEMENT_DATA: PeriodicElement[] = [
  {CATEGORY_ID:'cat-025', CATEGORY_NAME: 'Stationary' , CREATED_ON:'11/3/2021' ,TOTAL_VENDORS:10 ,CATEGORY_DETAILS:'category for stationary vendor',STATUS:'Active'},
  {CATEGORY_ID:'cat-024', CATEGORY_NAME: 'Laptop' , CREATED_ON:'11/3/2021' ,TOTAL_VENDORS:2 ,CATEGORY_DETAILS:'category for Laptop vendor',STATUS:'Active'},
  {CATEGORY_ID:'cat-023', CATEGORY_NAME: 'Material' , CREATED_ON:'11/3/2021' ,TOTAL_VENDORS:8 ,CATEGORY_DETAILS:'category for Laptop vendor',STATUS:'Active'},
  
];


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements AfterViewInit {

 

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
constructor(private breakpointObserver: BreakpointObserver ) {}
ngAfterViewInit(): void {
  throw new Error('Method not implemented.');
}

displayedColumns: string[] = [ 'CATEGORY_ID', 'CATEGORY_NAME', 'CREATED_ON', 'TOTAL_VENDORS','CATEGORY_DETAILS','STATUS'];
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
