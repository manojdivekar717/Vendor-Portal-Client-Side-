import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { MatRadioModule } from '@angular/material/radio';


import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SideComponent } from './side/side.component';
import { VendorComponent } from './vendor/vendor.component';
import { ProjectsComponent} from './projects/projects.component';



import { CategoriesComponent} from './categories/categories.component';

import { InvoicesComponent} from './invoices/invoices.component';
import { PoliciesComponent} from './policies/policies.component';



import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';





import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { NewsComponent } from './news/news.component';
import { PublishpoliciesComponent } from './policies/publishpolicies/publishpolicies.component';
import { AddprojectComponent } from './projects/addproject/addproject.component';
import { ProjectdetailsComponent } from './projects/projectdetails/projectdetails.component';
import { CreatecategoryComponent } from './categories/createcategory/createcategory.component';
import { AllvendorsComponent } from './vendor/allvendors/allvendors.component';
import { VendordetailComponent } from './vendor/vendordetail/vendordetail.component';
import { PendingvendorverificationComponent } from './vendor/pendingvendorverification/pendingvendorverification.component';
import { ProjectHeadComponent } from './project-head/project-head.component';
import { AddProjectHeadComponent } from './project-head/add-project-head/add-project-head.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { AllpurchaseorderComponent } from './purchaseorder/allpurchaseorder/allpurchaseorder.component';
import { PurchaseorderDetailComponent } from './purchaseorder/purchaseorder-detail/purchaseorder-detail.component';
import { GRNComponent } from './grn/grn.component';
import { ApproveGrnComponent } from './grn/approve-grn/approve-grn.component';
import { ApproveinvoicesComponent } from './invoices/approveinvoices/approveinvoices.component';
import { PostNewsComponent } from './news/post-news/post-news.component';
import { RFQComponent } from './rfq/rfq.component';
import { PublishRFQComponent } from './rfq/publish-rfq/publish-rfq.component';
import { MatTableExporterModule } from 'mat-table-exporter'




@NgModule({
  declarations: [
    AppComponent,
    SideComponent,
    VendorComponent,
    ProjectsComponent,



    CategoriesComponent,

    InvoicesComponent,
    PoliciesComponent,
    NewsComponent,
    PublishpoliciesComponent,
    AddprojectComponent,
    ProjectdetailsComponent,
    CreatecategoryComponent,
    AllvendorsComponent,
    VendordetailComponent,
    PendingvendorverificationComponent,
    ProjectHeadComponent,
    AddProjectHeadComponent,
    PurchaseorderComponent,
    AllpurchaseorderComponent,
    PurchaseorderDetailComponent,
    GRNComponent,
    ApproveGrnComponent,
    ApproveinvoicesComponent,
    PostNewsComponent,
    RFQComponent,
    PublishRFQComponent,




 


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    MatTableExporterModule

    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
