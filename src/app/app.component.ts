import { Component } from '@angular/core';
import { IPElement } from './Interfaces/ipelement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PTable';
  test: IPElement = {
    atomicMass: "1.00794(4)",
    atomicNumber: 1,
    cpkHexColor: "FFFFFF",
    name: "Hydrogen", 
    group: 1,
    period: 1,
    standardState: "gas",
    symbol: "H",
    yearDiscovered: 1766,
    meltingPoint: 14,
    boilingPoint: 20,
    atomicRadius: 37,
    electronegativity: "2.2",
    electronicConfiguration: "1s1",
    density: 0.0000899,
    groupBlock: "nonmetal"
    };

  Onchange(event: any) {
    this.test = event;
  }
}
