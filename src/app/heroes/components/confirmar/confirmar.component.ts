import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor(private dialog: MatDialogRef<ConfirmarComponent>, @Inject(MAT_DIALOG_DATA) public data: Heroe) { }

  ngOnInit(): void {
  }
  

  eliminarHeroe() {
    this.dialog.close(true);
  }

  cancerlar() {
    this.dialog.close();
  }
}
