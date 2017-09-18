import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

// 路由懒加载
const Recommend = (resolve) => {
  import('@/components/Recommend/Recommend').then((module) => {
    resolve(module)
  })
}
const Singer = (resolve) => {
  import('@/components/Singer/Singer').then((module) => {
    resolve(module)
  })
}
const Rank = (resolve) => {
  import('@/components/Rank/Rank').then((module) => {
    resolve(module)
  })
}
const Search = (resolve) => {
  import('@/components/Search/Search').then((module) => {
    resolve(module)
  })
}
const SingerDetail = (resolve) => {
  import('@/components/SingerDetail/SingerDetail').then((module) => {
    resolve(module)
  })
}
const SongListDetail = (resolve) => {
  import('@/components/SongListDetail/SongListDetail').then((module) => {
    resolve(module)
  })
}
const RankDetail = (resolve) => {
  import('@/components/RankDetail/RankDetail').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/recommend'
    },
    {
      path:'/recommend',
      name:'recommend',
      component:Recommend,
      children: [
        {
          path: ':id',
          name: 'songlistdetail',
          component: SongListDetail
        }
      ]
    },
    {
      path:'/Singer',
      name:'singer',
      component:Singer,
      children: [
        {
          path: ':id',
          name: 'singerdetail',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank,
      children: [
        {
          path: ':id',
          name: 'rankdetail',
          component: RankDetail
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    }
  ]
})
