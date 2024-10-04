import { Component } from '@angular/core';
import { NgxDialog } from 'ngx-eagle/dialog';
import { DialogRef2Component } from './dialog-ref2.component';

@Component({
  selector: 'app-dialog-demo2',
  template: `
    <button
      ngx-button
      buttonRounded="full"
      buttonFillMode="filled"
      (click)="openDialog()"
    >
      Open dialog
    </button>
  `,
})
export class DialogDemo2Component {
  constructor(private dialog: NgxDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogRef2Component, {
      data: {
        title: 'Modal Title',
        states: this.states,
      },
    });
    dialogRef.afterClosed$.subscribe(() => {
      console.log('The modal has been closed');
    });
  }

  states = [
    { value: 'aguascalientes', label: 'Aguascalientes' },
    { value: 'baja_california', label: 'Baja California' },
    { value: 'baja_california_sur', label: 'Baja California Sur' },
    { value: 'campeche', label: 'Campeche' },
    { value: 'chiapas', label: 'Chiapas' },
    { value: 'chihuahua', label: 'Chihuahua' },
    { value: 'ciudad_de_mexico', label: 'Ciudad de México' },
    { value: 'coahuila', label: 'Coahuila' },
    { value: 'colima', label: 'Colima' },
    { value: 'durango', label: 'Durango' },
    { value: 'estado_de_mexico', label: 'Estado de México' },
    { value: 'guanajuato', label: 'Guanajuato' },
    { value: 'guerrero', label: 'Guerrero' },
    { value: 'hidalgo', label: 'Hidalgo' },
    { value: 'jalisco', label: 'Jalisco' },
    { value: 'michoacán', label: 'Michoacán' },
    { value: 'morelos', label: 'Morelos' },
    { value: 'nayarit', label: 'Nayarit' },
    { value: 'nuevo_leon', label: 'Nuevo León' },
    { value: 'oaxaca', label: 'Oaxaca' },
    { value: 'puebla', label: 'Puebla' },
    { value: 'queretaro', label: 'Querétaro' },
    { value: 'quintana_roo', label: 'Quintana Roo' },
    { value: 'san_luis_potosí', label: 'San Luis Potosí' },
    { value: 'sinaloa', label: 'Sinaloa' },
    { value: 'sonora', label: 'Sonora' },
    { value: 'tabasco', label: 'Tabasco' },
    { value: 'tamaulipas', label: 'Tamaulipas' },
    { value: 'tlaxcala', label: 'Tlaxcala' },
    { value: 'veracruz', label: 'Veracruz' },
    { value: 'yucatan', label: 'Yucatán' },
    { value: 'zacatecas', label: 'Zacatecas' },
  ];
}
