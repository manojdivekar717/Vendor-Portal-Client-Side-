import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesComponent } from './categories/categories.component';
import { CreatecategoryComponent } from './categories/createcategory/createcategory.component';
import { ApproveGrnComponent } from './grn/approve-grn/approve-grn.component';
import { GRNComponent } from './grn/grn.component';
import { ApproveinvoicesComponent } from './invoices/approveinvoices/approveinvoices.component';


import { InvoicesComponent } from './invoices/invoices.component';
import { NewsComponent } from './news/news.component';
import { PostNewsComponent } from './news/post-news/post-news.component';
import { PoliciesComponent } from './policies/policies.component';
import { PublishpoliciesComponent } from './policies/publishpolicies/publishpolicies.component';
import { AddProjectHeadComponent } from './project-head/add-project-head/add-project-head.component';
import { ProjectHeadComponent } from './project-head/project-head.component';
import { AddprojectComponent } from './projects/addproject/addproject.component';
import { ProjectdetailsComponent } from './projects/projectdetails/projectdetails.component';
import { ProjectsComponent } from './projects/projects.component';
import { AllpurchaseorderComponent } from './purchaseorder/allpurchaseorder/allpurchaseorder.component';
import { PurchaseorderDetailComponent } from './purchaseorder/purchaseorder-detail/purchaseorder-detail.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { PublishRFQComponent } from './rfq/publish-rfq/publish-rfq.component';
import { RFQComponent } from './rfq/rfq.component';

 
import { SideComponent } from './side/side.component';
import { AllvendorsComponent } from './vendor/allvendors/allvendors.component';
import { PendingvendorverificationComponent } from './vendor/pendingvendorverification/pendingvendorverification.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendordetailComponent } from './vendor/vendordetail/vendordetail.component';


const routes: Routes = [
         
  { path: '', redirectTo: '/side', pathMatch: 'full' },
    {path:'side',component:SideComponent},
    {path:'projects',component:ProjectsComponent},

    {path:'categories',component:CategoriesComponent},

   
    {path:'invoices',component:InvoicesComponent},
    {path:'policies',component:PoliciesComponent},
    {path:'news',component:NewsComponent},
    {path:'postnews',component:PostNewsComponent},
    {path:'vendors',component:VendorComponent},
    {path:'publishpolicies',component:PublishpoliciesComponent},
    {path:'addproject',component:AddprojectComponent},
    {path:'projectdetails',component:ProjectdetailsComponent},
    {path:'createcategory',component:CreatecategoryComponent},
    {path:'allvendors',component:AllvendorsComponent},
    {path:'vendordetail',component:VendordetailComponent},
    {path:'pendingvendorverification',component:PendingvendorverificationComponent},
    {path:'projecthead',component:ProjectHeadComponent},
    {path:'addprojecthead',component:AddProjectHeadComponent},
    {path:'purchaseorder',component:PurchaseorderComponent},
    {path:'allpurchaseorder',component:AllpurchaseorderComponent},
    {path:'purchaseorderdetail',component:PurchaseorderDetailComponent},
    {path:'grn',component:GRNComponent},
    {path:'approvegrn',component:ApproveGrnComponent},
    {path:'approveinvoices',component:ApproveinvoicesComponent},
    {path:'rfq',component:RFQComponent},
    {path:'publishrfq',component:PublishRFQComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
