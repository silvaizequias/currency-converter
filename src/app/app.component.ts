import { CurrencyConverterComponent } from './currency-converter/currency-converter.component'
import { IConverter } from './currency-converter/currency-converter.interface'
import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { AppService } from './app.service'
import { Observable } from 'rxjs'
import { TopBarElementComponent } from './elements/top-bar-element/top-bar-element.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CurrencyConverterComponent,
    CommonModule,
    RouterOutlet,
    TopBarElementComponent,
  ],
  template: `
    <app-top-bar-element></app-top-bar-element>
    <app-currency-converter [ars]="ARS" [cad]="CAD" [gbp]="GBP">
    </app-currency-converter>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor(public readonly appService: AppService) {}

  ARS: Observable<IConverter> | any = this.appService.converter('ARS-BRL')
  CAD: Observable<IConverter> | any = this.appService.converter('CAD-BRL')
  GBP: Observable<IConverter> | any = this.appService.converter('GBP-BRL')

  ngOnInit(): void {
    this.ARS.subscribe((data: any) => {
      return (this.ARS = {
        name: String(data.ARSBRL.name).replace('/Real Brasileiro', ''),
        varBid: Number(data.ARSBRL.varBid),
        pctChange: data.ARSBRL.pctChange,
        ask: Number(data.ARSBRL.ask).toFixed(2),
        create_date: new Date(data.ARSBRL.create_date).toLocaleTimeString(),
      })
    })

    this.CAD.subscribe((data: any) => {
      return (this.CAD = {
        name: String(data.CADBRL.name).replace('/Real Brasileiro', ''),
        varBid: Number(data.CADBRL.varBid),
        pctChange: data.CADBRL.pctChange,
        ask: Number(data.CADBRL.ask).toFixed(2),
        create_date: new Date(data.CADBRL.create_date).toLocaleTimeString(),
      })
    })

    this.GBP.subscribe((data: any) => {
      this.GBP = {
        name: String(data.GBPBRL.name).replace('/Real Brasileiro', ''),
        varBid: Number(data.GBPBRL.varBid),
        pctChange: data.GBPBRL.pctChange,
        ask: Number(data.GBPBRL.ask).toFixed(2),
        create_date: new Date(data.GBPBRL.create_date).toLocaleTimeString(),
      }
    })
  }
}
