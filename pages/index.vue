<template>
  <div class="container">
    <div class="wrap">
      <logo />
      <div class="search-wrapper">
        <form action="javascript:void(0)">
          <el-input
            v-model="q"
            class="search"
            prefix-icon="el-icon-search"
            type="search"
            @keyup.enter.native="route"
          />
        </form>
      </div>
      <div class="links">
        <!-- <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          查询
        </a>-->
        <!-- <a
          class="button--grey"
          @click="route"
        >
          查询
        </a>-->
        <pre v-if="result">{{ result }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      q: '',
      result: null
    }
  },
  watch: {
    q(val, old) {
      if (!val) {
        this.result = null
      }
    }
  },
  methods: {
    async search() {
      if (!this.q) return
      const res = await this.$axios.$get(`${location.origin}/s?keywords=${this.q}`)
      this.result = res
      // eslint-disable-next-line no-console
      // console.log(res)
    },
    route() {
      if (!this.q) return
      this.$router.push({
        path: '/search',
        query: {
          q: this.q
        }
      })
    }
  }
}
</script>

<style lang="less">
.container {
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
}

.wrap {
  width: 100%;
  margin-top: 10%;
}

.links {
  padding-top: 15px;
}

.search-wrapper {
  width: 41%;
  margin: 0 auto;
}

.search {
  margin-top: 30px;
  .el-input__inner {
    border-radius: 23px;
    line-height: 46px;
    height: 46px;
    padding-left: 50px;
  }
  .el-input__icon {
    font-size: 16px;
    width: 33px;
    font-weight: bold;
    line-height: 47px;
  }
  .el-input__prefix {
    left: 10px;
  }
}

/* https://css-tricks.com/snippets/css/media-queries-for-standard-devices/ */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
  .search-wrapper {
    width: 90%;
  }

  pre {
    width: 90%;
  }
}
</style>
