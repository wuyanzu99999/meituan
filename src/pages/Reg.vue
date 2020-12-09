<template>
  <div>
    <Loginheader/>
    <!-- <Tologinortoregister/> -->
    <Toreg/>
    <Wechatorqq/>
    <Loginorregbottom/>
  </div>
</template>

<script>
import Loginheader from '../components/Loginheader'
import Toreg from '../components/Toreg'
import Wechatorqq from '../components/Wechatorqq'
import Loginorregbottom from '../components/Loginorregbottom'


export default {
  name: 'Loginorreg',
  components: {
    Loginheader,Toreg,Wechatorqq,Loginorregbottom
  },
  data(){
    return{
    }
  }
}
</script>

<style scope>
   
</style>
