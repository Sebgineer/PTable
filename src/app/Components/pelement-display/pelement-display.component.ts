import { Component, Input, OnInit } from '@angular/core';
import { IPElement } from 'src/app/Interfaces/ipelement';

@Component({
  selector: 'app-pelement-display',
  templateUrl: './pelement-display.component.html',
  styleUrls: ['./pelement-display.component.css']
})
export class PElementDisplayComponent implements OnInit {

  @Input() Element: IPElement = {
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

  constructor() {}

  ngOnInit(): void {
  }

  GetColor(hex: string) : string {
    if (hex == 'unknown' || hex == "0") {
      return '#eee';
    }
    return `#${hex}`;
  }

  //Ikke færdigt
  SetElection(text : string ) : number[] {
    let result: number[] = [];
    console.log(text);
    let kage = text.split(' ');
    console.log(kage);
    switch (kage[0]) {
      case '[He]':
        result = [2];
        break;
      case '[Ne]':
        result = [2, 8];
        break;
      case '[Ar]':
        result = [2, 8, 8];
        break;
      case '[Ar]':
        result = [2, 8, 8];
        break;
    }
    console.log(result);
    return [];
  } 
}
