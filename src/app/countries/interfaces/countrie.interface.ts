export interface ICountrieSmall {
    name: IName;
    cca3: string;
    latlng: number[];
}

export class CountrieSmall implements ICountrieSmall {
    name: IName;
    cca3: string;
    latlng: number[];

    constructor() {
        this.cca3 = '';
        this.name = null;
        this.latlng = [18.489202466590267,-69.94680196984339];
    }
}

export interface ICountrie {
    name:         IName;
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cca3:         string;
    cioc:         string;
    independent:  boolean;
    status:       string;
    unMember:     boolean;
    currencies:   ICurrencies;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    subregion:    string;
    languages:    ILanguages;
    translations: { [key: string]: ITranslation };
    latlng:       number[];
    landlocked:   boolean;
    borders:      string[];
    area:         number;
    demonyms:     IDemonyms;
    flag:         string;
    maps:         IMaps;
    population:   number;
    gini:         IGini;
    fifa:         string;
    car:          ICar;
    timezones:    string[];
    continents:   string[];
    flags:        ICoatOfArms;
    coatOfArms:   ICoatOfArms;
    startOfWeek:  string;
    capitalInfo:  ICapitalInfo;
    postalCode:   IPostalCode;
}

export interface ICapitalInfo {
    latlng: number[];
}

export interface ICar {
    signs: string[];
    side:  string;
}

export interface ICoatOfArms {
    png: string;
    svg: string;
}

export interface ICurrencies {
    PEN: IPen;
}

export interface IPen {
    name:   string;
    symbol: string;
}

export interface IDemonyms {
    eng: IEng;
    fra: IEng;
}

export interface IEng {
    f: string;
    m: string;
}

export interface IGini {
    "2019": number;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface ILanguages {
    aym: string;
    que: string;
    spa: string;
}

export interface IMaps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface IName {
    common:     string;
    official:   string;
    nativeName: INativeName;
}

export interface INativeName {
    aym: ITranslation;
    que: ITranslation;
    spa: ITranslation;
}

export interface ITranslation {
    official: string;
    common:   string;
}

export interface IPostalCode {
    format: string;
    regex:  string;
}
