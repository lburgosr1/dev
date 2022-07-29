import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarkersComponent } from './pages/markers/markers.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'fullscreen', component: FullScreenComponent },
      { path: 'zoom-range', component: ZoomRangeComponent },
      { path: 'markers', component: MarkersComponent },
      { path: 'properties', component: PropertiesComponent },
      { path: '**', redirectTo: 'fullscreen' },
    ]
  },
  {
    path: '**',
    redirectTo: 'maps'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
