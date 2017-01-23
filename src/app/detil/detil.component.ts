import { Component, OnInit } from '@angular/core';
import { MakananService } from '../service/makanan.service';
import { Router } from '@angular/router';
import { MakananModel } from '../service/makanan.model';

@Component({
  selector: 'detil',
  templateUrl: './detil.component.html'
})
export class DetilComponent implements OnInit {
   listDetil: MakananModel[] = [];

  constructor(private makananService: MakananService, private _router:Router) { }

  ngOnInit() {
    this.listDetil = this.makananService.getDetil();
  }

  redirectHome(){
    this._router.navigateByUrl("/siap-makan");
    this.listDetil.length = 0;
  }

  listPesanan : MakananModel[] = [];

  masukKeranjang(record: MakananModel) {
    if(this.listPesanan.indexOf(record) !== -1) {
      return;
    }
    alert(record.nama_makanan + " ditambahkan ke dalam keranjang");
    this.makananService.addPesanan(record);
  }
  
}
