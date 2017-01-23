import { MakananModel } from './makanan.model';

export class MakananService {

    private pesanan: MakananModel[] = [];

    getPesanan(){
        return this.pesanan;
    }

    addPesanan(record: MakananModel){
        if(this.pesanan.indexOf(record) !== -1) {
            return;
        }
        this.pesanan.push(record);
    }

    removePesanan(record: MakananModel){
        this.pesanan.splice(this.pesanan.indexOf(record), 1);
    }

    getTotalPrice(){
        let totalPrice = this.pesanan.reduce((sum, record )=>{
            return sum += record.harga, sum;
        },0);
        return totalPrice;
    }

    private detil: MakananModel[] = [];

    addDetil(record: MakananModel){
        this.detil.push(record);
    }

    getDetil(){
        return this.detil;
    }
}