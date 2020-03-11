<template>
  <div class="container">
    <div style="width: 100%">
      <logo />
      <div class="search-wrapper">
        <form action="javascript:void(0)">
          <el-input
            v-model="keywords"
            class="search"
            prefix-icon="el-icon-search"
            type="search"
            @keyup.enter.native="get"
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
          @click="get"
        >
          查询
        </a>
        <p>ip: {{ ip }}</p>-->
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
      keywords: '',
      result: null
    }
  },
  watch: {
    keywords(val, old) {
      if (!val) {
        this.result = null
      }
    }
  },
  methods: {
    async search() {
      const ip = await this.$axios.$get('http://icanhazip.com')
      this.ip = ip
    },
    async get() {
      if (!this.keywords) { return }
      const res = await this.$axios.$get(`${location.origin}/search?keywords=${this.keywords}`)
      this.result = res
      // eslint-disable-next-line no-console
      console.log(res)
    }
  }
}
</script>

<style>
.container {
  margin: 10% auto 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.search-wrapper {
  width: 41%;
  margin: 0 auto;
}
.search {
  /* width: 584px; */
  margin-top: 30px;
}
.search .el-input__inner {
  border-radius: 23px;
  line-height: 46px;
  height: 46px;
  padding-left: 50px;
}
.search .el-input__icon {
  font-size: 16px;
  width: 33px;
  font-weight: bold;
}
.search .el-input__prefix {
  left: 10px;
}
pre {
  margin: 0 auto;
  width: 41%;
  text-align: left;
  background: #f1f1f1;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
}

/* https://css-tricks.com/snippets/css/media-queries-for-standard-devices/ */
@media only screen and (min-device-width: 320px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
  .search-wrapper {
    width: 90%;
  }
  pre {
    width: 90%;
  }
}
</style>
