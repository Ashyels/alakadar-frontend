export class MakananModel {
    public id_makanan: number;
    public nama_makanan: string;
    public deskripsi: string;
    public harga: number;
    public gambar: string;

    constructor(id_makanan: number, nama_makanan: string, deskripsi: string, harga: number, gambar: string) {
        this.id_makanan = id_makanan;
        this.nama_makanan = nama_makanan;
        this.deskripsi = deskripsi;
        this.harga = harga;
        this.gambar = gambar;
    }
}