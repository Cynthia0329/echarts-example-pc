// ⭐待
import { mapGetters, mapActions } from 'vuex'

export const ebookMixin = {
  computed: {
    ...mapGetters([
      'isLogin',
      'isLoginShow',
      'isUserShow',
      'userName',
      'pageId'
    ])
  },
  methods: {
    ...mapActions([
      'setIsLogin',
      'setIsLoginShow',
      'setIsUserShow',
      'setUserName',
      'setPageId'
    ])
  }
}
