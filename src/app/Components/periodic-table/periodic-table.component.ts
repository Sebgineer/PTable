import { Component, OnInit } from '@angular/core';
import { IPElement } from 'src/app/Interfaces/ipelement';
import { PeriodicElementService } from 'src/app/Services/periodic-element.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css']
})
export class PeriodicTableComponent implements OnInit {

  pElements: IPElement[] = [];
  selectedElement: IPElement = {
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
  @Output() EventPElement: EventEmitter<IPElement> = new EventEmitter<IPElement>();

  constructor(private Pservices: PeriodicElementService) { }

  ngOnInit(): void {
    this.Pservices.GetTable().subscribe((data: IPElement[]) => {
      next: 
      this.pElements = data;
      this.pElements[4].period = 2;
      this.pElements.forEach(e => { e.color = e.cpkHexColor; })
    });
  }

  checkNumber(number: number) : boolean {
    if (number >= 57 && number <= 71) {
      return false;
    }
    if (number >= 89 && number <= 103) {
      return false;
    }
    return true;
  }


  GetColor(hex: string) : string {
    if (hex == 'unknown' || hex == '0') {
      return '#eee';
    }
    return `#${hex}`;
  }

  OnElementClick(number: number) {
    this.selectedElement = this.pElements[number];
    this.EventPElement.emit(this.pElements[number]);
  }

  ColorReset() {
    this.pElements.forEach(e => {
      e.color = e.cpkHexColor;
    });
  }

  StateColor(state: string, color: string) {
    this.pElements.forEach(e => {
      if (e.standardState == state) {
        e.color = color;
      } else {
        e.color = "fff"
      }
    });
  }
}
