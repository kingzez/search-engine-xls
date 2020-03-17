<template>
  <div class="search-container">
    <div class="header">
      <nuxt-link to="/">
        <logo class="s-logo" />
      </nuxt-link>
      <div class="header-search-wrapper">
        <form action="javascript:void(0)">
          <el-input
            v-model="q"
            class="search"
            prefix-icon="el-icon-search"
            type="search"
            @keyup.enter.native="search"
          />
        </form>
      </div>
    </div>
    <div class="results">
      <div v-if="hasData" class="item">
        <p class="title">
          城市名：{{ result.name }}
        </p>
        <p class="code">
          城市编码：{{ result.code }}
        </p>
        <p class="province-code">
          省编码：{{ result.provinceCode }}
        </p>
        <p class="fullname">
          全名：{{ result.fullname }}
        </p>
      </div>
      <div v-if="noData" class="no-data">
        <NoData />
        <p>
          {{ result.msg }}
        </p>
      </div>
      <!-- <pre v-if="result">{{ result }}</pre> -->
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import NoData from '~/components/NoData.vue'

export default {
  components: {
    Logo,
    NoData
  },
  data() {
    return {
      q: '',
      result: null
    }
  },
  computed: {
    hasData() {
      return (this.result && this.result.name)
    },
    noData() {
      return (this.result && this.result.msg)
    }
  },
  watch: {
    q(val, old) {
      if (!val) {
        this.result = null
      }
    }
  },
  created() {
    this.q = this.$route.query.q
    this.search()
  },
  methods: {
    async search() {
      if (!this.q) return
      this.$router.push({
        path: '/search',
        query: {
          q: this.q
        }
      })
      const res = await this.$axios.$get(`${location.origin}/s?keywords=${this.q}`)
      this.result = res
      // eslint-disable-next-line no-console
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.search-container {
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  width: 100%;
  height: 88px;
  display: flex;
  .s-logo {
    width: 96px;
    margin: 10px 20px;
    height: 80px;
  }
}

.results {
  padding-top: 20px;
  margin-left: 136px;
  .title {
    font-size: 20px;
    line-height: 1.3;
  }
  .code, .province-code, .fullname {
    font-size: 14px;
    line-height: 1.57;
  }
  .no-data {
    font-size: 14px;
    color: #8e8e8e;
    text-align: center;
    width: 40%;
    p {
      margin-top: 20px;
    }
  }
}

.header-search-wrapper {
  width: 41%;
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
  }
  .el-input__prefix {
    left: 10px;
  }
}

/* https://css-tricks.com/snippets/css/media-queries-for-standard-devices/ */
@media only screen and (min-device-width: 320px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
  .header-search-wrapper {
    width: 68%;
  }
  .header {
    .s-logo {
      width: 70px;
      margin: 10px 20px;
      height: 74px;
    }
  }
  .results {
    margin-left: 36px;
    .no-data {
      width: 100%;
    }
  }
  pre {
    width: 90%;
  }
}
</style>
