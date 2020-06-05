<template>
  <div>
    <nav-header />
    <router-view />
    <nav-footer />
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'
export default {
  name: 'Home',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>
<style lang="scss" scoped></style>
