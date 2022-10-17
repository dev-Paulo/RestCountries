// To parse this data:
//
//   import { Convert } from "./file";
//
//   const countriesModel = Convert.toCountriesModel(json);

export interface CountriesModel {
    name?:         Name;
    tld?:          string[];
    cca2?:         string;
    ccn3?:         string;
    cca3?:         string;
    cioc?:         string;
    independent?:  boolean;
    status?:       Status;
    unMember?:     boolean;
    currencies?:   Currencies;
    idd?:          Idd;
    capital?:      string[];
    altSpellings?: string[];
    region?:       Region;
    subregion?:    string;
    languages?:    { [key: string]: string };
    translations?: { [key: string]: Translation };
    latlng?:       number[];
    landlocked?:   boolean;
    area?:         number;
    demonyms?:     Demonyms;
    flag?:         string;
    maps?:         Maps;
    population?:   number;
    gini?:         { [key: string]: number };
    fifa?:         string;
    car?:          Car;
    timezones?:    string[];
    continents?:   Continent[];
    flags?:        CoatOfArms;
    coatOfArms?:   CoatOfArms;
    startOfWeek?:  StartOfWeek;
    capitalInfo?:  CapitalInfo;
    postalCode?:   PostalCode;
    borders?:      string[];
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side?:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    ISK?: Aed;
    EUR?: Aed;
    IQD?: Aed;
    MWK?: Aed;
    HKD?: Aed;
    PYG?: Aed;
    DJF?: Aed;
    MGA?: Aed;
    NPR?: Aed;
    DKK?: Aed;
    NOK?: Aed;
    AUD?: Aed;
    TVD?: Aed;
    LBP?: Aed;
    XOF?: Aed;
    CVE?: Aed;
    GIP?: Aed;
    DZD?: Aed;
    GEL?: Aed;
    MNT?: Aed;
    IRR?: Aed;
    NZD?: Aed;
    SGD?: Aed;
    USD?: Aed;
    NIO?: Aed;
    MDL?: Aed;
    YER?: Aed;
    GMD?: Aed;
    KGS?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    ERN?: Aed;
    KRW?: Aed;
    GHS?: Aed;
    EGP?: Aed;
    XAF?: Aed;
    TWD?: Aed;
    CKD?: Aed;
    SZL?: Aed;
    ZAR?: Aed;
    OMR?: Aed;
    UYU?: Aed;
    BSD?: Aed;
    BRL?: Aed;
    MMK?: Aed;
    SEK?: Aed;
    VND?: Aed;
    AWG?: Aed;
    ILS?: Aed;
    JOD?: Aed;
    PEN?: Aed;
    XCD?: Aed;
    BIF?: Aed;
    GTQ?: Aed;
    XPF?: Aed;
    SHP?: Aed;
    LAK?: Aed;
    SLL?: Aed;
    INR?: Aed;
    JMD?: Aed;
    MKD?: Aed;
    CAD?: Aed;
    LRD?: Aed;
    BHD?: Aed;
    BMD?: Aed;
    MYR?: Aed;
    KID?: Aed;
    UAH?: Aed;
    FOK?: Aed;
    AFN?: Aed;
    STN?: Aed;
    KWD?: Aed;
    PLN?: Aed;
    VUV?: Aed;
    KMF?: Aed;
    CNY?: Aed;
    MAD?: Aed;
    MRU?: Aed;
    PAB?: Aed;
    SBD?: Aed;
    CRC?: Aed;
    PGK?: Aed;
    JPY?: Aed;
    SSP?: Aed;
    GBP?: Aed;
    ANG?: Aed;
    VES?: Aed;
    THB?: Aed;
    PHP?: Aed;
    BND?: Aed;
    CHF?: Aed;
    COP?: Aed;
    BZD?: Aed;
    BOB?: Aed;
    RUB?: Aed;
    TZS?: Aed;
    ZWL?: Aed;
    AZN?: Aed;
    MUR?: Aed;
    AMD?: Aed;
    CZK?: Aed;
    HTG?: Aed;
    LKR?: Aed;
    ALL?: Aed;
    SYP?: Aed;
    BTN?: Aed;
    JEP?: Aed;
    TND?: Aed;
    WST?: Aed;
    TRY?: Aed;
    AED?: Aed;
    BAM?: BAM;
    BWP?: Aed;
    GGP?: Aed;
    SCR?: Aed;
    AOA?: Aed;
    QAR?: Aed;
    NAD?: Aed;
    KHR?: Aed;
    GNF?: Aed;
    UZS?: Aed;
    ZMW?: Aed;
    SOS?: Aed;
    BGN?: Aed;
    RWF?: Aed;
    GYD?: Aed;
    MXN?: Aed;
    CDF?: Aed;
    ETB?: Aed;
    MOP?: Aed;
    PKR?: Aed;
    IDR?: Aed;
    ARS?: Aed;
    RON?: Aed;
    UGX?: Aed;
    SRD?: Aed;
    MVR?: Aed;
    FJD?: Aed;
    TTD?: Aed;
    TOP?: Aed;
    CLP?: Aed;
    SDG?: BAM;
    LSL?: Aed;
    FKP?: Aed;
    MZN?: Aed;
    TJS?: Aed;
    KPW?: Aed;
    RSD?: Aed;
    HNL?: Aed;
    KES?: Aed;
    BYN?: Aed;
    DOP?: Aed;
    SAR?: Aed;
    BDT?: Aed;
    BBD?: Aed;
    IMP?: Aed;
    KZT?: Aed;
    LYD?: Aed;
    KYD?: Aed;
    NGN?: Aed;
    HRK?: Aed;
    HUF?: Aed;
    TMT?: Aed;
}

export interface Aed {
    name?:   string;
    symbol?: string;
}

export interface BAM {
    name?: string;
}

export interface Demonyms {
    eng?: Eng;
    fra?: Eng;
}

export interface Eng {
    f?: string;
    m?: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps?:     string;
    openStreetMaps?: string;
}

export interface Name {
    common?:     string;
    official?:   string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official?: string;
    common?:   string;
}

export interface PostalCode {
    format?: string;
    regex?:  string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toCountriesModel(json: string): CountriesModel[] {
        return JSON.parse(json);
    }

    public static countriesModelToJson(value: CountriesModel[]): string {
        return JSON.stringify(value);
    }
}
