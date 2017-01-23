import { PemesananComponent } from './../pemesanan/pemesanan.component';
import { Router } from '@angular/router';
import { MakananService } from '../service/makanan.service';
import { MakananModel } from '../service/makanan.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'keranjang',
  templateUrl: './keranjang.component.html'
})
export class KeranjangComponent implements OnInit {
  listPesanan: MakananModel[] = [];
  total:number;

  removeFromKeranjang(menu: MakananModel){
    this.makananService.removePesanan(menu);
    this.total = this.makananService.getTotalPrice();
  }

  constructor(private makananService: MakananService, private _router:Router) { }

  ngOnInit() {
    this.listPesanan = this.makananService.getPesanan();
    this.total = this.makananService.getTotalPrice();
  }

  redirect(){
    this._router.navigateByUrl("/pemesanan");
  }
  
  redirectHome(){
    this._router.navigateByUrl("/siap-makan");
  }
}