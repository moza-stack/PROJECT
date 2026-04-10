import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../../services/doctors.service';
import { Doctor } from '../../models/doctor';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html'
})
export class DoctorsListComponent implements OnInit {

  doctors: Doctor[] = [];

  constructor(private doctorService: DoctorsService) {}

  ngOnInit(): void {
    this.doctors = this.doctorService.getDoctors();
  }

  onSelectDoctor(doc: Doctor) {
    console.log(doc);
  }
}