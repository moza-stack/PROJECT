import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Doctor } from '../models/doctor';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html'
})
export class DoctorCardComponent {

  @Input() doctor!: Doctor;
  @Output() selectDoctor = new EventEmitter<Doctor>();

  selectDoctorHandler() {
    this.selectDoctor.emit(this.doctor);
  }
}
