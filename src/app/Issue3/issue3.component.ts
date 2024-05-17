import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxSchedulerModule } from 'devextreme-angular';
import { Appointment, calendarService } from './calendar.service';

@Component({
  selector: 'app-issue3',
  standalone: true,
  imports: [CommonModule,DxSchedulerModule],
  templateUrl: './issue3.component.html',
  styleUrl: './issue3.component.css',
  providers:[calendarService]

})
export class Issue3Component {
  appointmentsData: Appointment[];

  currentDate: Date = new Date(2021, 3, 29);

  constructor(service: calendarService) {
    this.appointmentsData = service.getAppointments();
  }
}
