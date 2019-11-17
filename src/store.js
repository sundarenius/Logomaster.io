import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    updateChoosenLogo: 0,
    choosedLogo: '',
    latestStyles: [],
    savedLogos: [],
    step: 0,
    chargeAmount: 599,
    chargeCurrency: 'usd',
    stripeHandler: '',
    iconTypes: {
      general: ['star', 'style', 'whatshot', 'spa', 'more', 'label', 'label_important', 'loyalty', 'code', 'timeline', 'toll', 'turned_in', 'visibility', 'play_arrow', 'chat_bubble', 'chat', 'comment', 'forum', 'textsms', 'stay_current_portrait', 'redo', 'public'],
      tv: ['tv', 'tablet_mac', 'tablet', 'tablet_android', 'smartphone', 'laptop_chromebook'],
      data: ['laptop', 'mouse', 'keyboard', 'device_hub', 'developer_board', 'memory', 'security', 'beenhere'],
      blogging: ['adjust', 'crop', 'filter_vintage', 'flare', 'looks', 'style'],
      fitness: ['spa', 'fitness_center', 'whatshot', 'star'],
      marketing: ['device_hub', 'turned_in', 'how_to_reg', 'list_alt', 'chat', 'forum', 'business', 'verified_user', 'work', 'track_changes', 'visibility', 'label', 'label_important', 'hourglass_full', 'loyalty', 'language', 'assignment'],
      barsRestaurant: ['fastfood', 'local_dining', 'local_bar', 'local_drink', 'local_offer', 'free_breakfast'],
      hr: ['people', 'person', 'whatshot', 'business', 'visibility'],
      kids: ['child_care', 'child_friendly', 'sentiment_very_satisfied', 'thumb_up_alt', 'whatshot', 'spa', 'beach_access'],
      shopping: ['shop', 'shop_two', 'add_shopping_cart', 'shopping_basket', 'shopping_cart', 'loyalty'],
      health: ['healing', 'hearing', 'local_hospital', 'layers', 'spa'],
      movies: ['theaters', 'local_movies', 'movie_creation', 'movie_filter', 'live_tv', 'tv'],
      banking: ['attach_money', 'monetization_on', 'money', 'account_balance', 'work', 'turned_in'],
      education: ['account_balance', 'schedule', 'school', 'bookmarks', 'public'],
      gambling: ['casino', 'money', 'monetization_on', 'attach_money', 'local_atm'],
      hotels: ['bookmark', 'layers', 'hotel', 'near_me', 'beenhere'],
      humanRights: ['people', 'account_circle', 'group_work', 'loyalty', 'public'],
      gaming: ['gamepad', 'videogame_asset', 'toys', 'headset_mic', 'laptop'],
      music: ['music_note', 'music_video', 'headset', 'scatter_plot', 'play_arrow'],
      realEstate: ['home', 'business', 'location_city', 'star']
    },
    logoInfo: {
      logoName: '',
      logoTagline: '',
      choosedIndustry: '',
      industries: [
        'Data & IT',
        'Blogging',
        'Fitness',
        'Marketing',
        'Bars & Restaurants',
        'Human resources',
        'Kids',
        'Shopping',
        'Health and social care',
        'Movies',
        'Banking & Mortgage',
        'Beer, Wine & Liquor',
        'Education',
        'Sales',
        'Gambling & Casinos',
        'Hotels, Motels & Tourism',
        'Human Rights',
        'Gaming',
        'Music',
        'Real Estate',
        'Retail Sales',
        'TV-series'
      ],
      typeOfLogo: 0,
      styles: []
    },
    colors: ['white', 'black', 'secondary', 'success', 'primary', 'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'blue-grey', 'grey'],
    choosedLogoType: '',
    logos: {
      custom: '',
      black: '',
      white: ''
    },
    logosLink: {
      custom: '',
      black: '',
      white: ''
    }
  },
  mutations: {
    stylesCommit (state, payload) {
      state.logoInfo.styles = payload
    },
    stepCommit (state, payload) {
      state.step = payload
    },
    choosedIndustryCommit (state, payload) {
      state.logoInfo.choosedIndustry = payload
    },
    logoNameCommit (state, payload) {
      state.logoInfo.logoName = payload
    },
    logoTaglineCommit (state, payload) {
      state.logoInfo.logoTagline = payload
    }
  },
  actions: {

  },
  getters: {
    styles (state) {
      return state.logoInfo.styles
    }
  }
})
