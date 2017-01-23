import { DataService } from './../data.service';
import { Router } from '@angular/router';
import { MakananService } from '../service/makanan.service';
import { MakananModel } from '../service/makanan.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'siap-makan',
  templateUrl: './siap-makan.component.html'
})
export class SiapMakanComponent implements OnInit {
  recordSiapMakan = [];
  listPesanan : MakananModel[] = [];

  masukKeranjang(record: MakananModel) {
    if(this.listPesanan.indexOf(record) !== -1) {
      return;
    }
    alert(record.nama_makanan + " ditambahkan ke dalam keranjang");
    this.makananService.addPesanan(record);
  }

  constructor(private makananService: MakananService, private _router:Router, private dataService: DataService) { }

  ngOnInit() {
    this.listPesanan = this.makananService.getPesanan();

    this.dataService.httpSiapMakan().subscribe(
      (data) => this.recordSiapMakan = data
    );
  }

  redirectCart(){
    this._router.navigateByUrl('/keranjang');
  }

  masukDetil(record: MakananModel) {
    this.makananService.addDetil(record);
    this._router.navigateByUrl('/detil');
    console.log(record);
  }
}