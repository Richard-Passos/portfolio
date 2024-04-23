import * as constants from '@/constants'
import normId from './normId'

const getConstants = (locale) => constants[normId(locale)] || constants[normId(constants.locales?.[0])] || constants



export default getConstants