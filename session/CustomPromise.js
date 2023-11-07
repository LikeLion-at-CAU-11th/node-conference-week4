class CustomPromise {
  constructor(execute) {
    this.value = null;
    this.state = 'pending';
    this.thenFunction = null;

    const resolve = (value) => {
      this.value = value;
      this.sttate = 'fulfilled';
      this.thenFunction(this.value);
    };

    execute(resolve);
  }

  then(func) {
    this.thenFunction = func;
  }
}

const myPromise = new CustomPromise((resolve) =>
  setTimeout(() => resolve(2), 1000)
);
