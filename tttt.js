// let hero = {
//   name: '醫護',
//   power:5,
//   healling: function(){
//   },
  
// }

var hero = {
  name: '悟空',
  sayMyName: function() {
    console.log(this.name);
  }
};

hero.sayMyName();   // A

var speakOut = hero.sayMyName;
speakOut();         // B

const someone = { name: '路人' }

hero.sayMyName.call(someone);  // C

function here() {
  console.log(this);
}

const there = () => {
  console.log(this);
}

here();   // D
there();  // E

- A：悟空
- B：undefined
- C：路人
- D：全域物件
- E：全域物件