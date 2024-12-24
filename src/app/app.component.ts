import { Component } from '@angular/core';
import {NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionPanelComponent } from "./accordion-panel.component/accordion-panel.component";
import { AccordionComponent } from "./accordion/accordion.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AccordionPanelComponent, AccordionComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 data =[{title: 'Section1', discription: 'ТекстТЕКСТтекстТеКсттЕкСт'},
  {title: 'Section2', discription: 'ТекстТЕКСТтекстТеКсттЕкСт'},
  {title: 'Section3', discription: 'ТекстТЕКСТтекстТеКсттЕкСт'}]
panelOpenState: any;
  title: any;
  constructor () {}
 
}

@NgModule({
  
  // Metadata goes here
})
export class CustomMenuModule { }
