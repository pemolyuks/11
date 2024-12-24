import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  sections = [
    { title: 'Секция 1', content: 'Содержимое секции 1', isOpen: false },
    { title: 'Секция 2', content: 'Содержимое секции 2', isOpen: false },
    { title: 'Секция 3', content: 'Содержимое секции 3', isOpen: false },
    { title: 'Секция 4', content: 'Содержимое секции 4', isOpen: false },
  ];

  toggleSection(index: number) {
    this.sections[index].isOpen = !this.sections[index].isOpen;

    // Закрыть другие секции
    this.sections.forEach((section, i) => {
      if (i !== index) {
        section.isOpen = false;
      }
    });
  }
}