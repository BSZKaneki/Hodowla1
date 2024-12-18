import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-mainpage',
  imports: [NgOptimizedImage],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
