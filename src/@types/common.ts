export interface OptionSelect {
  value: any
  label: string
}

export type QueryConfig = {
  [key in keyof ListConfig]: string
}

export interface ListConfig {
  subscription?: string
  productQuantity?: string
}
