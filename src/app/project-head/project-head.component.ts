
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
  PROJECT_NAME:string;
  PROJECT_ID:string;
 
  EMAIL_ID:string;
  CONTACT:string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {SR_NO:1, PROJECT_NAME: 'Name Surname' , PROJECT_ID:'ABC123' ,EMAIL_ID:'Abc@gmail.com',CONTACT:'123456789'},
  {SR_NO:2, PROJECT_NAME: 'Name Surname' , PROJECT_ID:'ABC123' ,EMAIL_ID:'Abc@gmail.com',CONTACT:'123456789'},
  {SR_NO:3, PROJECT_NAME: 'Name Surname' , PROJECT_ID:'ABC123' ,EMAIL_ID:'Abc@gmail.com',CONTACT:'123456789'},
  {SR_NO:4, PROJECT_NAME: 'Name Surname' , PROJECT_ID:'ABC123' ,EMAIL_ID:'Abc@gmail.com',CONTACT:'123456789'},
  {SR_NO:5, PROJECT_NAME: 'Name Surname' , PROJECT_ID:'ABC123' ,EMAIL_ID:'Abc@gmail.com',CONTACT:'123456789'},
 
 
];

@Component({
  selector: 'app-project-head',
  templateUrl: './project-head.component.html',
  styleUrls: ['./project-head.component.css']
})
export class ProjectHeadComponent implements AfterViewInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
constructor(private breakpointObserver: BreakpointObserver ) {}
ngAfterViewInit(): void {
  throw new Error('Method not implemented.');
}

displayedColumns: string[] = [ 'SR_NO', 'PROJECT_NAME', 'PROJECT_ID', 'EMAIL_ID','CONTACT'];
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
