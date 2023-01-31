/// <reference path="./matchers/beWithin.ts"/>

import { createFixtureLoader } from './shared/provider'
import { IntrinsicFixtureType } from './shared/fixtures'

export type LoadFixtureFunction = ReturnType<typeof createFixtureLoader>

export type TestContext = IntrinsicFixtureType & {
  subject?: Function
}
