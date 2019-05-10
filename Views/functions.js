import axios from "axios"
import Vue from 'vue'
import app from './ligas'

Vue.prototype.$http = axios

new Vue({
    el: '#appLigas',
    template: '<App/>',
    components: { App }
  })

exports.app = new Vue({
    data:{

    },
    methods: {

    }
})

