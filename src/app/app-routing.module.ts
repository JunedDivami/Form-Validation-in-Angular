import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaydataComponent } from './displaydata/displaydata.component';

//specifiying the route url for Display component, the component will be loaded upon navigation to specified path below
const routes: Routes = [
  { path: 'display-component', component: DisplaydataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
