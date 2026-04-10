// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-appointment-form',
//   templateUrl: './appointment-form.component.html'
// })
// export class AppointmentFormComponent {

//   patientName = '';
//   isFormValid = false;

//   onInput(event: any) {
//     this.patientName = event.target.value;
//     this.isFormValid = this.patientName.length > 0;
//   }
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html'
})
export class AppointmentFormComponent {

  patientName: string = '';
  isFormValid: boolean = false;

  onNameChange(value: string) {
    this.patientName = value;
    this.isFormValid = value.trim().length > 2;
  }

  submit() {
    alert(`Appointment booked for ${this.patientName}`);
  }
}