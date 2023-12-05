import { CardElementComponent } from './../elements/card-element/card-element.component'
import { Component, Input, OnInit } from '@angular/core'
import { IConverter } from './currency-converter.interface'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [CardElementComponent],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css',
})
export class CurrencyConverterComponent implements OnInit {
  @Input() ars: Observable<IConverter> | any
  @Input() cad: Observable<IConverter> | any
  @Input() gbp: Observable<IConverter> | any

  constructor() {}
  ngOnInit(): void {}
}
