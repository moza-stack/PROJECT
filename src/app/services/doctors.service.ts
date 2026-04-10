

  import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Sara Al-Rashidi",
      specialty: "Cardiology",
      rating: 4.9,
      experience: 14,
      fee: 60,
      available: true,
      availableDays: ["Sunday", "Tuesday", "Thursday"]
    },
    {
      id: 2,
      name: "Dr. Omar Khalil",
      specialty: "General Medicine",
      rating: 4.5,
      experience: 8,
      fee: 30,
      available: true,
      availableDays: ["Sunday", "Monday", "Wednesday"]
    },
    {
id: 3,
name: "Dr. Layla Mansour",
specialty: "Dermatology",
rating: 4.7,
experience: 10,
fee: 50,
available: true,
availableDays: [
"Monday",
"Wednesday",
"Friday"]
    }
  ];

  getDoctors(): Doctor[] {
    return this.doctors;
  }

  getBySpecialty(specialty: string): Doctor[] {
    return this.doctors.filter(d => d.specialty === specialty);
  }
}

