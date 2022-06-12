import { localize } from '@nativescript/localize'

export const _t = (key, locale = 'en') => localize(key)
