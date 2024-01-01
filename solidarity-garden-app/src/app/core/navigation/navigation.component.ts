import { Component, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [
    trigger('changeHeaderSize', [
      state('small', style({ transform: 'scale(1)' })),
      state('large', style({ transform: 'scale(1.68)' })),
      transition('small <=> large', animate('50ms ease-in')),
    ]),
    trigger('changeButtonSize', [
      state('small', style({ transform: 'scale(1)', top: '2%' })),
      state('large', style({ transform: 'scale(1.32)', top: '4%' })),
      transition('small <=> large', animate('800ms ease-in')),
    ]),
  ],
})
export class NavigationComponent {
  isScrolled = false;
  headerSizeState: 'small' | 'large' = 'small';
  buttonSizeState: 'small' | 'large' = 'small';
  hasScrolledOnce = false;
  isDesktop: boolean = window.innerWidth > 678;


  constructor(public translate: TranslateService,private elementRef: ElementRef) {

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    const isMenuOpen = this.isDesktop || this.elementRef.nativeElement.querySelector('#burger')['checked'];
    if (isMenuOpen) {
      this.headerSizeState = 'small';
      this.buttonSizeState = 'small';
      return;
    }

    const currentScrollY = window.scrollY;
    this.isScrolled = currentScrollY > 10;

    if (this.isScrolled && !this.hasScrolledOnce) {
      this.headerSizeState = 'large';
      this.buttonSizeState = 'large';
      setTimeout(() => {
        this.headerSizeState = 'small';
        this.buttonSizeState = 'small';
        this.hasScrolledOnce = true;
      }, 800);
    }

    if (currentScrollY === 0) {
      this.hasScrolledOnce = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isDesktop = window.innerWidth > 768;
  }
}
