import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { IConverter } from '../../currency-converter/currency-converter.interface'
import { CurrencyConverterComponent } from '../../currency-converter/currency-converter.component'
import { Observable } from 'rxjs'

@Component({
  selector: '[app-card-element]',
  standalone: true,
  imports: [CommonModule, CurrencyConverterComponent],
  templateUrl: './card-element.component.html',
  styleUrl: './card-element.component.css',
})
export class CardElementComponent implements OnInit {
  @Input() converter: Observable<IConverter> | any
  constructor() {}

  ngOnInit(): void {}
}
