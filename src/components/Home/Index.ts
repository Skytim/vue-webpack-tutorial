import { Component, Vue } from 'vue-property-decorator';
import ResultsSettltment from '@/components/ResultsSettltment/Index.vue'; // @ is an alias to /src
import Navbar from './Navbar.vue';

@Component({
  components: {
    ResultsSettltment,
    Navbar,
  },
})
export default class Home extends Vue {}
