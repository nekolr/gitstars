const isProduction = process.env.NODE_ENV === 'production'
const clientId = isProduction ? '75cf00b02deb33e63424' : 'bf9d4f20def51dbd5c5c'
const clientSecret = isProduction ? '6fa564cbd46f6bdfa1fb81ddce5503dcbe4ab4c4' : 'e8f5bc4369f64b05d052819047ca9d5e1d8b2e8f'
const access = '142d4c119af2d4c6b5c9'
const token = 'd159c1824ef2fa4be80f'

export default {
  clientId,
  clientSecret,
  accessToken: `${access}${token}`,
  gistId: '9193d95cdef7f9a017816e10adfc1724',
  filename: 'gitstars.json',
  description: `github stars manager for ${process.env.NODE_ENV}`,
  norifyPosition: 'bottom-right',
  starredReposPerPage: 100, // Github 最大值
  i18nLocaleKey: 'gitstars_i18n_local',
  defaultTags: {
    all: { id: 0, name: '全部', i18nKey: 'allRepos', icon: 'fa-bars', repos: [] },
    untagged: { id: -1, name: '未标签', i18nKey: 'untaggedRepos', icon: 'fa-star-o', repos: [] }
  },
  tagCategorys: {
    custom: { id: 0, name: '自定义', i18nKey: 'custom' },
    language: { id: 1, name: '语言', i18nKey: 'language' }
  }
}
