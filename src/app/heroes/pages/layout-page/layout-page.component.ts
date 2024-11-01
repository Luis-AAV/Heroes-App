import { Component } from '@angular/core';

@Component({
  selector: 'heroes-layout-page',
  templateUrl: './layout-page.component.html',
  styles: `
    #toolbar{ background-color: #17a391 }
  `
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-heroe' },
    { label: 'Buscar', icon: 'search', url: './search' }
  ]

}
