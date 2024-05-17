import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee, State, deveventsService } from './devevents.service';
import { DxDataGridModule } from 'devextreme-angular';

@Component({
  selector: 'app-issue1',
  standalone: true,
  imports: [CommonModule,DxDataGridModule],
  templateUrl: './issue1.component.html',
  styleUrl: './issue1.component.css',
  providers:[deveventsService]

})
export class Issue1Component {
  dataSource: Employee[];
  
  states: State[];
  public titleofEvents:string = "Events Search";
  public titleofInstruments:string = "Instruments";


  constructor(public popUPService: deveventsService) {
    this.dataSource = popUPService.getEmployees();
    this.states = popUPService.getStates();
  }
}
