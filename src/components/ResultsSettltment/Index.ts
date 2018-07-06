import { Component, Vue } from 'vue-property-decorator';
import SearchBar from './SearchBar.vue';
@Component({
  components: {
    SearchBar,
  },
})
export default class Index extends Vue { }
