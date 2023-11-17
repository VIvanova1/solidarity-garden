import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentIndex = 0;

  newsItems = [
    { title: 'News 1', content: 'Content for News 1' },
    { title: 'News 2', content: 'Content for News 2' },
    { title: 'News 3', content: 'Content for News 3' },
    { title: 'News 4', content: 'Content for News 4' },
  ];

  prevSlide(): void {
    const totalItems = this.newsItems.length;
    this.currentIndex = (this.currentIndex - 1 + totalItems) % totalItems;
  }

  nextSlide(): void {
    const totalItems = this.newsItems.length;
    this.currentIndex = (this.currentIndex + 1) % totalItems;
  }

}
