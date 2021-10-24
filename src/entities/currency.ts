import JSBI from 'jsbi'

import { SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public decimals: number
  public symbol?: string
  public name?: string

  /**
   * The only instance of the base class `Currency`.
   */
  public static ETHER: Currency = new Currency(18, 'BNB', 'BNB')


  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }

  change(cId:number){
    if(cId==1){
      ETHER.name = "Ether"
      ETHER.symbol = "ETH"
    }
    if(cId==56){
      ETHER.name = "BNB"
      ETHER.symbol = "BNB"
    }
    if(cId==137){
      ETHER.name = "Matic"
      ETHER.symbol = "MATIC"
    }
  }
}

const ETHER = Currency.ETHER
export { ETHER }
