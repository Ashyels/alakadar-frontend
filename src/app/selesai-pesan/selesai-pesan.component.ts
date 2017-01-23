import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'selesai-pesan',
  templateUrl: './selesai-pesan.component.html',
  styles: []
})
export class SelesaiPesanComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  redirectHome() {
    this._router.navigateByUrl('/siap-makan');
  }
}
