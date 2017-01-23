import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pemesanan',
  templateUrl: './pemesanan.component.html'
})
export class PemesananComponent implements OnInit {
  
  constructor(private _router:Router) { }
  namanya : string;
  alamatnya : string;
  rtnya : string;
  rwnya : string;
  kecamatannya : string;
  kelurahannya : string;
  kotanya : string;
  posnya : string;
  teleponnya : string;

  ngOnInit() {
  }

  redirectToCart(){
    this._router.navigateByUrl('/keranjang');
  }

  redirectToKonfirmasi(){
    this._router.navigateByUrl('/cek-pesanan/'+this.namanya+'/'+this.alamatnya+'/'+this.rtnya+'/'+this.rwnya+'/'+this.kecamatannya+'/'+this.kelurahannya+'/'+this.kotanya+'/'+this.posnya+'/'+this.teleponnya)
  }
}