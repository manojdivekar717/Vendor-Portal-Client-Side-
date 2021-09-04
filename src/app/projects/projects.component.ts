
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
  PROJECT_NAME: string;
 
  PROJECT_ID:string;
  CREATED_ON:string;
  PROJECT_HEAD:string;
  PO_IN_PROCESS:string;
  STATUS:string;
  ACTION:string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {PROJECT_ID:'test-01234', PROJECT_NAME: 'Test Project', CREATED_ON:'11/3/2021',  PROJECT_HEAD:'Name Surname', PO_IN_PROCESS:'5', STATUS:'Active', ACTION:'edit'},
  {PROJECT_ID:'test-01234', PROJECT_NAME: 'Test Project', CREATED_ON:'11/3/2021',  PROJECT_HEAD:'Name Surname', PO_IN_PROCESS:'5', STATUS:'Active', ACTION:'edit'},
  {PROJECT_ID:'test-01234', PROJECT_NAME: 'Test Project', CREATED_ON:'11/3/2021',  PROJECT_HEAD:'Name Surname', PO_IN_PROCESS:'5', STATUS:'Active', ACTION:'edit'},
  {PROJECT_ID:'test-01234', PROJECT_NAME: 'Test Project', CREATED_ON:'11/3/2021',  PROJECT_HEAD:'Name Surname', PO_IN_PROCESS:'5', STATUS:'Active', ACTION:'edit'},
  {PROJECT_ID:'test-01234', PROJECT_NAME: 'Test Project', CREATED_ON:'11/3/2021',  PROJECT_HEAD:'Name Surname', PO_IN_PROCESS:'5', STATUS:'Active', ACTION:'edit'},
  {PROJECT_ID:'test-01234', PROJECT_NAME: 'Test Project', CREATED_ON:'11/3/2021',  PROJECT_HEAD:'Name Surname', PO_IN_PROCESS:'5', STATUS:'Active', ACTION:'edit'},
  {PROJECT_ID:'test-01234', PROJECT_NAME: 'Test Project', CREATED_ON:'11/3/2021',  PROJECT_HEAD:'Name Surname', PO_IN_PROCESS:'5', STATUS:'Active', ACTION:'edit'},
  {PROJECT_ID:'test-01234', PROJECT_NAME: 'Test Project', CREATED_ON:'11/3/2021',  PROJECT_HEAD:'Name Surname', PO_IN_PROCESS:'5', STATUS:'Active', ACTION:'edit'},

];



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements  AfterViewInit {
  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
constructor(private breakpointObserver: BreakpointObserver ) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  
  displayedColumns: string[] = [ 'PROJECT_ID', 'PROJECT_NAME', 'CREATED_ON', 'PROJECT_HEAD','PO_IN_PROCESS','STATUS','ACTION'];
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
