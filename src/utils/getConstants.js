import * as constants from '@/constants'
import normId from './normId'
import { locales } from '@/navigation'

const getConstants = (locale) => constants[normId(locale)] || constants[normId(locales[0])] || constants



export default getConstants