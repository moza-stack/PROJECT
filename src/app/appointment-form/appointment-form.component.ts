import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html'
})
export class AppointmentFormComponent {

  patientName = '';
  isFormValid = false;

  onInput(event: any) {
    this.patientName = event.target.value;
    this.isFormValid = this.patientName.length > 0;
  }
}
