import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Login extends Vue {
  private labelPosition: string = 'right';
  private formLabelAlign: object = {
    name: '',
    region: '',
    type: '',
  };
}
