// @flow

import i18n from 'react-native-i18n'

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
i18n.fallbacks = true

// English language is the main language for fall back:
i18n.translations = {
  en: require('./en.json')
}

let languageCode = i18n.locale.substr(0, 2)
if (!languageCode.length) {
  languageCode = 'en'
}

switch (languageCode) {
  case 'en':
    i18n.translations.en = require('./en.json')
}
