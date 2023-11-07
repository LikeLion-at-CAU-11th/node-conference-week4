export class Title {
  constructor(model) {
    this.model = model;
    this.model.subscribe(this.render.bind(this)); //this이슈... 이후에 다룰 예정
    this.render();
  }

  render() {
    this.inner = model.getInner();
  }

  change(value) {
    this.model.setInner(value);
  }

  getInner() {
    return this.inner;
  }
}

export class SubTitle {
  constructor(model) {
    this.model = model;
    this.model.subscribe(this.render.bind(this));
    this.render();
  }

  render() {
    this.inner = model.getInner();
  }

  change(value) {
    this.model.setInner(value);
  }

  getInner() {
    return this.inner;
  }
}
