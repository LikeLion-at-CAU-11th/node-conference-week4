const model = new TitleModel();
const title = new Title(model);
const subTitle = new SubTitle(model);

console.log(title.getInner()); //제목을 입력해주세요
console.log(subTitle.getInner()); //제목을 입력해주세요

title.change('제목바꾸기!');

console.log(title.getInner()); //제목바꾸기!
console.log(subTitle.getInner()); //제목바꾸기!
