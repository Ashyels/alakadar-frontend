import { MakananService } from './../service/makanan.service';
import { MakananModel } from './../service/makanan.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cek-pesanan',
  templateUrl: './cek-pesanan.component.html'
})
export class CekPesananComponent implements OnInit {
  nama : string;
  alamat : string;
  rt : string;
  rw : string;
  kecamatan : string;
  kelurahan : string;
  kota : string;
  pos : string;
  telepon : string;
  total:number;

  listPesanan: MakananModel[] = [];

  constructor(private _router:ActivatedRoute,private makananService: MakananService, private __router:Router) {
    this.nama = _router.snapshot.params['namanya'],
    this.alamat = _router.snapshot.params['alamatnya'],
    this.rt = _router.snapshot.params['rtnya'],
    this.rw = _router.snapshot.params['rwnya'],
    this.kecamatan = _router.snapshot.params['kecamatannya'],
    this.kelurahan = _router.snapshot.params['kelurahannya'],
    this.kota = _router.snapshot.params['kotanya'],
    this.pos = _router.snapshot.params['posnya'],
    this.telepon = _router.snapshot.params['teleponnya']
  }

  redirectToFinish(){
    this.listPesanan.length = 0;
    this.__router.navigateByUrl('/selesai-pesan');
  }

  redirectToHome(){
    this.listPesanan.length = 0;
    this.__router.navigateByUrl("/siap-makan");
  }

  ngOnInit() {
    this.listPesanan = this.makananService.getPesanan();
    this.total = this.makananService.getTotalPrice();
  }

}
