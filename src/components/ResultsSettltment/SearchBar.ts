import { Component, Vue } from 'vue-property-decorator';

@Component({
})
export default class SearchBar extends Vue {
  public formInline: object = {
    user: '',
    region: '',
  };
  public value6: string = '';
  private dialogTableVisible: boolean = false;
}
