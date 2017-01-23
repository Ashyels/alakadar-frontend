import { CekPesananComponent } from './cek-pesanan/cek-pesanan.component';
import { DetilComponent } from './detil/detil.component';
import { SelesaiPesanComponent } from './selesai-pesan/selesai-pesan.component';
import { PemesananComponent } from './pemesanan/pemesanan.component';
import { SiapMakanComponent } from './siap-makan/siap-makan.component';
import { KeranjangComponent } from './keranjang/keranjang.component';
import { Routes, RouterModule } from "@angular/router"

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/siap-makan', pathMatch: 'full'},
    { path: 'siap-makan', component: SiapMakanComponent },
    { path: 'keranjang', component: KeranjangComponent },
    { path: 'pemesanan', component: PemesananComponent },
    { path: 'selesai-pesan', component: SelesaiPesanComponent },
    { path: 'cek-pesanan/:namanya/:alamatnya/:rtnya/:rwnya/:kecamatannya/:kelurahannya/:kotanya/:posnya/:teleponnya', component: CekPesananComponent },
    { path: 'detil', component: DetilComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);