import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isNavbarOpen = false;
  isFixed = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth > 768) {
      this.isNavbarOpen = false;
    }
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (window.scrollY > 10) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }
}