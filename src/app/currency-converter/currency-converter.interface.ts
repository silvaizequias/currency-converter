export interface IConverter {
  code: string
  codein: string
  name: string
  high: number
  low: number
  varBid: number
  pctChange: string
  bid: number
  ask: number
  timestamp: Date
  create_date: Date
}

export interface ICurrency {
  currency: 'CAD-BRL' | 'ARS-BRL' | 'GBP-BRL'
}
