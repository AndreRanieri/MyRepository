import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ComputerDetailComponent } from './components/computer/computer-detail/computer-detail.component';
import { AddComputerComponent } from './components/computer/add-computer/add-computer.component';
import { EditComputerComponent } from './components/computer/edit-computer/edit-computer.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'computers', component: DashboardComponent},
  {path: 'computer/computers/:id', component: ComputerDetailComponent},
  {path: 'computer/computeradd', component: AddComputerComponent},
  {path: 'computer/edit/:id', component: EditComputerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
