import { Component, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('scanner', { static: false })
  // scanner: ZXingScannerComponent;
 
  // /**
  //  * Some method.
  //  */
  // doSomething(): void {
  //   // this.scanner.device = this.getBackCamera();
  // }
 
  // /**
  //  * Returns the back camera for ya.
  //  */
  // getBackCamera() {
  //   // return theBackCamera;
  // }
}
