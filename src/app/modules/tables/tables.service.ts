import { Injectable } from '@angular/core';
import { Mesero } from './tables.interface';
import { Data } from './tables.interface';


@Injectable({
  providedIn: 'root'
})
export class TablesService {

  datas: Data [] = []

  meseros: Mesero [] = [
    {
      name: 'Suaberto López'
    },
    {
      name: 'Alberto Efecinco'
    },
    {
      name: 'Roberto batelenguas'
    },
  ]


  constructor() { }
}
