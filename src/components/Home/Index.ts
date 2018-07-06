import { Component, Vue } from 'vue-property-decorator';
import ResultsSettltment from '@/components/ResultsSettltment/Index.vue'; // @ is an alias to /src

@Component({
  components: {
    ResultsSettltment,
  },
})
export default class Home extends Vue {}
