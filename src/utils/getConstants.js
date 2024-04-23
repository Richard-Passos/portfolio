import * as constants from '@/constants'
import normId from './normId'

const getConstants = (lang) => constants[normId(lang)] || constants[normId(constants.languages?.[0])] || constants


export default getConstants