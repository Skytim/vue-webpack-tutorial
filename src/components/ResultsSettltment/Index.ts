import { Component, Vue } from 'vue-property-decorator';
import SearchBar from './SearchBar.vue';
import ResultTable from './ResultTable.vue';
@Component({
  components: {
    SearchBar,
    ResultTable,
  },
})
export default class Index extends Vue { }
