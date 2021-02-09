import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {

  private scanning: boolean = true;
  private information: string = 'Scanning ....';

  constructor(
    private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  public scanningHandler($event: any) {
    this.scanning = false;
    this.information = $event;
  }

  public enableScanner() {
    this.scanning = !this.scanning;
    this.information = 'Scanning ....';
  }

}

interface Transport {
  plates: string;
  slot: Slot;
}

interface Slot {
  name: string;
  description: string;
}
