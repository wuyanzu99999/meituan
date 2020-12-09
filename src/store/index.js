import Vue from "vue";
import vuex from "vuex";

Vue.use(vuex);

export default new vuex.Store({
    state:{
        index: 0
    },
    mutations:{
        changeIndex(state,idx){
            state.index=idx
        }
    }
})