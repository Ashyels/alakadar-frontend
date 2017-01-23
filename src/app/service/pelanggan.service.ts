import { PelangganModel } from './pelanggan.model';

export class PelangganService {

    private pelanggan: PelangganModel[] = [];

    getPelanggan(){
        return this.pelanggan;
    }

    addPelanggan(record: PelangganModel){
        this.pelanggan.push(record);
    }

    removePelanggan(record: PelangganModel){
        this.pelanggan.length = 0;
    }
}