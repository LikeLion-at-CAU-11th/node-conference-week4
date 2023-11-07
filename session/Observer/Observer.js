export class Observer {
  constructor() {
    this.observers = new Set();
  }

  subscribe(observer) {
    //이 모델을 쓰는 객체가 함수를 등록할 수 있게함
    this.observers.add(observer);
  }

  notify() {
    //등록한 콜백을 죄다 호출함
    this.observers.forEach((observer) => observer());
  }
}
