import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.css']
})

export class AccordionPanelComponent {
  @Input() title!: string;
  @Input() description?: string;
  isOpen = false;

  togglePanel() {
    this.isOpen = !this.isOpen;
  }
}