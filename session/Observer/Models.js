export class TitleModel extends Observer {
  constructor() {
    super();
    this.inner = '제목을 입력해주세요';
  }

  getInner() {
    //model의 데이터 제공
    return this.inner;
  }

  setInner(inputValue) {
    this.inner = inputValue; //모델의 데이터를 설정하고
    this.notify(); //등록한 함수를 죄다 호출함
  }
}
