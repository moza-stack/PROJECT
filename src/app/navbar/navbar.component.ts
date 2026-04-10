import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  toggleDark() {
  document.body.classList.toggle('dark');
  localStorage.setItem('dark', document.body.classList.contains('dark') + '');
}

ngOnInit() {
  if (localStorage.getItem('dark') === 'true') {
    document.body.classList.add('dark');
  }
}

}
