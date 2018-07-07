import { Component, Vue } from 'vue-property-decorator';
import Navbar from './components/Home/Navbar.vue';
@Component({
    components: {
       Navbar,
    },
})
export default class App extends Vue {
}
