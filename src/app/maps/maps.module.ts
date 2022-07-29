import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsRoutingModule } from './maps-routing.module';
import { LoadingComponent } from './components/loading/loading.component';
import { MiniMapsComponent } from './components/mini-maps/mini-maps.component';
import { MarkersComponent } from './pages/markers/markers.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { PropertiesComponent } from './pages/properties/properties.component';



@NgModule({
  declarations: [
    LoadingComponent, 
    MiniMapsComponent, 
    MarkersComponent, 
    FullScreenComponent, 
    ZoomRangeComponent,
    PropertiesComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
