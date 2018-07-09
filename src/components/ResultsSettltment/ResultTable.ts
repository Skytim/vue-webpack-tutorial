import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class ResultTable extends Vue {
  public tableData2: object[] = [
    {
      no: '1',
      name: '王小虎',
      counter: 'ShangHai',
      drawNo: 564,
      resultStatus: 'Pending',
    },
    {
      no: '2',
      name: '王小虎',
      counter: 'ShangHai',
      drawNo: 565,
      resultStatus: 'Pending',
    },
    {
      no: '3',
      name: '王小虎',
      counter: 'ShangHai',
      drawNo: 566,
      resultStatus: 'Pending',
    },
    {
      no: '100',
      name: '王小虎',
      counter: 'ShangHai',
      drawNo: 567,
      resultStatus: 'Pending',
    },
  ];
  private form: object = {
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
  };
  private ScrapeResult() {
   this.$message({
    message: '恭喜你，这是一条成功消息',
    type: 'success',
    duration: 2000,
  });
  }
}
