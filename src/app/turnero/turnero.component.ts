import { Component } from '@angular/core';

@Component({
  selector: 'app-turnero',
  templateUrl: './turnero.component.html',
  styleUrls: ['./turnero.component.css'],
})
export class TurneroComponent {

  colorTexto: string = 'text-danger';
  colorButton1: string = 'btn btn-danger disabled';
  colorButton2: string = 'btn btn-success';
  numero: number = 0;
  mostrarMensaje: boolean = false;

  /* private actualizarButton() {
    if (this.numero == 10) {
      this.colorButton1 = 'btn btn-success';
      this.colorButton2 = 'btn btn-danger disabled';
      this.mostrarMensaje = true;
    } else if (this.numero >= 8) {
      this.colorButton1 = 'btn btn-success';
      this.colorButton2 = 'btn btn-warning';
      this.mostrarMensaje = false;
    } else if (this.numero >= 3) {
      this.colorButton1 = 'btn btn-success';
      this.colorButton2 = 'btn btn-success';
      this.mostrarMensaje = false;
    } else if (this.numero >= 1) {
      this.colorButton1 = 'btn btn-warning';
      this.colorButton2 = 'btn btn-success';
      this.mostrarMensaje = false;
    } else if (this.numero == 0) {
      this.colorButton1 = 'btn btn-danger disabled';
      this.colorButton2 = 'btn btn-success';
      this.mostrarMensaje = false;
    }
  }*/

  private actualizarButton() {
    const buttonConfig = [
      {
        numero: 10,
        color1: 'btn btn-success',
        color2: 'btn btn-danger disabled',
        mensaje: true,
        estilo: 'text-danger',
      },
      {
        numero: 8,
        color1: 'btn btn-success',
        color2: 'btn btn-warning',
        mensaje: false,
        estilo: 'text-warning',
      },
      {
        numero: 3,
        color1: 'btn btn-success',
        color2: 'btn btn-success',
        mensaje: false,
        estilo: 'text-success',
      },
      {
        numero: 1,
        color1: 'btn btn-warning',
        color2: 'btn btn-success',
        mensaje: false,
        estilo: 'text-warning',
      },
      {
        numero: 0,
        color1: 'btn btn-danger disabled',
        color2: 'btn btn-success',
        mensaje: false,
        estilo: 'text-danger',
      },
    ];

    const config =
      buttonConfig.find((item) => this.numero >= item.numero) ||
      buttonConfig[buttonConfig.length - 1];
    this.colorButton1 = config.color1;
    this.colorButton2 = config.color2;
    this.mostrarMensaje = config.mensaje;
    this.colorTexto = config.estilo;

  }

  decrementar() {
    this.numero--;
    this.actualizarButton();
  }

  incrementar() {
    this.numero++;
    this.actualizarButton();
  }
}
