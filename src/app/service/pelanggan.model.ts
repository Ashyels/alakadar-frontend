export class PelangganModel {
    public namanya : string;
    public alamatnya : string;
    public rtnya : number;
    public rwnya : number;
    public kecamatannya : string;
    public kelurahannya : string;
    public kotanya : string;
    public posnya : number;
    public teleponnya : string;

    constructor(namanya : string, alamatnya : string, rtnya : number, rwnya : number, kecamatannya : string, kelurahannya : string, kotanya : string, posnya : number, teleponnya : string) {
        this.namanya = namanya;
        this.alamatnya = alamatnya;
        this.rtnya = rtnya;
        this.rwnya = rwnya;
        this.kecamatannya = kecamatannya;
        this.kelurahannya = kelurahannya;
        this.kotanya = kotanya;
        this.posnya = posnya;
        this.teleponnya = teleponnya;
    }
}