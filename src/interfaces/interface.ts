export interface drugsInfo{
    name:string;
    type?:string;
    amount?:number;
    latinName?:string;
    arabicName?:string;
    chemName?:string;
    barcode:number;
    globLBarcode?:number;
    QRCode?:number;
    company?:string;
    department:string;
    classification:string;
    drugShape:string;
    control?:any;
}