<template>
<div>
  <Header></Header>

  <router-view></router-view>

  <Footer></Footer>
</div>
</template>

<script>
import Header from '@/pages/common/Header'
import Footer from '@/pages/common/Footer'

export default {
  name: 'app',
  components: {
  	'Header': Header,
  	'Footer': Footer 
  }
}
</script>

<style>
</style>
