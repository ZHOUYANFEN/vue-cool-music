<!-- xx组件 -->

<template>
  <transition name="slide" class="rank-detail">
    <music-list :songs="songs" :title="title" :bg-image="bgImage" :rank="true"></music-list>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import { getRankDetail } from '@/api/rank.js'
import { createSingerSong } from '@/assets/js/SingerSongClass.js'
import MusicList from '@/components/MusicList/MusicList'

export default {
  components: {
    MusicList
  },
  data () {
    return {
      songs: []
    }
  },
  props: {},
  watch: {},
  filters: {},
  methods: {
    // 获取指定排行榜单详情
    _getRankDetail() {
      // 禁止直接刷新详情页（获取不到排行 id）
      if (!this.rankList.id) {
        this.$router.push('/rank')
        return
      }

      getRankDetail(this.rankList.id).then((res) => {
        if (res.code === 0) {
          // console.log(res.songlist)
          this.songs = this._formatSongs(res.songlist)
        }
      })
    },
    // 重组 res.songlist 数据
    _formatSongs (list) {
      let result = []

      list.forEach((item) => {
        if (item.data.songid && item.data.albummid) {
          result.push(createSingerSong(item.data))
        }
      })

      return result
    }
  },
  computed: {
    // vuex, 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters(['rankList']),
    // 传入子组件
    title() {
      return this.rankList.topTitle
    },
    // 传入子组件
    bgImage() {
      if (this.songs.length) {
        return this.songs[0].img
      }
    }
  },
  created () {
    this._getRankDetail()
  },
  mounted () {},
  destroyed () {}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';

.rank-detail {
  // position: fixed;
  // z-index: 100;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  // background: $color-background;
}

.slide-enter-active, .slide-leave-active {
  transition: all .3s ease;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
</style>
