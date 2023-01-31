import { FeeAmount } from './external/periphery/constants'
import { getMinTick, getMaxTick } from './external/periphery/ticks'
import { TICK_SPACINGS } from './external/periphery/constants'

export const defaultTicks = (fee: FeeAmount = FeeAmount.MEDIUM) => ({
  tickLower: getMinTick(TICK_SPACINGS[fee]),
  tickUpper: getMaxTick(TICK_SPACINGS[fee]),
})

export const defaultTicksArray = (...args): [number, number] => {
  const { tickLower, tickUpper } = defaultTicks(...args)
  return [tickLower, tickUpper]
}
