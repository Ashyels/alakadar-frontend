import { DataService } from './data.service';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SiapMakanComponent } from './siap-makan/siap-makan.component';
import { KeranjangComponent } from './keranjang/keranjang.component';

import { MakananService } from './service/makanan.service';
import { HeaderComponent } from './header.component';
import { PemesananComponent } from './pemesanan/pemesanan.component';
import { SelesaiPesanComponent } from './selesai-pesan/selesai-pesan.component';
import { CekPesananComponent } from './cek-pesanan/cek-pesanan.component';
import 'rxjs/add/operator/map';
import { DetilComponent } from './detil/detil.component';

@NgModule({
  declarations: [
    AppComponent,
    SiapMakanComponent,
    KeranjangComponent,
    HeaderComponent,
    PemesananComponent,
    SelesaiPesanComponent,
    CekPesananComponent,
    DetilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MakananService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
