import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'esrijsapi';
  mapCenter = [-122.4194, 37.7749];
  basemapType = 'streets-vector';
  mapZoomLevel = 12;

  // See app.component.html
  mapLoadedEvent(status: boolean) {
    console.log('The map loaded: ' + status);
  }
}
