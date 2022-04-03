import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  getRate(coins: number) {
    return this.http.get<number>(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    .pipe(
      map(res => res)
    )
  }

  getChartOption(key:string) {
    return this.http.get<any>(`https://api.blockchain.info/charts/${key}?timespan=5months&format=json&cors=true`)
    .pipe(
      map(res => {
        const y = res.values.map(val => val.y)
        const x = res.values.map(val => new Date(val.x *1000).toLocaleDateString())
        return {x,y}
      }),
      map(res => ({
        legend: {
          data: ['bar', 'bar2'],
          align: 'left',
        },
        tooltip: {
          triger: 'axis'
        },
        xAxis: {
          data: res.x,
          silent: false,
          splitLine: {
            show: false,
          },
        },
        yAxis: {},
        series: [
          {
            name: 'line',
            type: 'line',
            smooth: true,
            data: res.y,
            areaStyle: '',
            animationDelay: (idx) => idx * 10,
          },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: (idx) => idx * 5,
      }))
    )
  }
  private _setIem(key, val) {
    const jsonVal = JSON.stringify(val)
    sessionStorage.setItem(key, jsonVal)
  }
  private _getItem(key) {
    const val = sessionStorage.getItem(key)
    return JSON.parse(val)
  }
}
