import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule } from 'devextreme-angular';
import { Jobs, devjobsService } from './devJobs.service';

@Component({
  selector: 'app-issue2',
  standalone: true,
  imports: [CommonModule,DxDataGridModule],
  templateUrl: './issue2.component.html',
  styleUrl: './issue2.component.css',
  providers:[devjobsService]

})
export class Issue2Component {
  dataSource: Jobs[];
  
  public titleofEvents:string = "Events Search";
  public titleofInstruments:string = "Instruments";


  constructor(public popUPService: devjobsService) {
    this.dataSource = popUPService.getEmployees();
  }
}
