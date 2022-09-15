const init= () => {
    let name = 'Mozilla'; // name is a local variable created by init
    const displayName = () => {
      // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

  ///Objects and this
  const newCatObject = {
    catName: "Yuzu",
    catBreed: "Tabby",
    catAge: 1,
    happyBirthday: function(){
        console.log(`Happy birthday ${this.catName}`)
    }
  }
  newCatObject.happyBirthday()