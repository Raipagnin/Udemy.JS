//exercise on 'this', where i'm gonna have a few phrases to pop up on short intervals like every 2 seconds on the console
const annoyer = {
    phrases : ['literally', 'absolutely', 'okurr', 'YOLO', 'TOTES!', 'cray cray', 'can\'t stop won\'t stop'],
    pickphrase() {
      const {phrases} = this;   //used like that so won't have to reference .length and phrases[idx]
      const idx = Math.floor(Math.random() * phrases.length);    // bit overkill, but example to work on
      return phrases[idx]  
    }, 
    start() {
      this.timerId = setInterval(() => {   //cause arrow fs don't have their own 'this', is not gonna be global and is gonna call from the level above
        console.log(this.pickphrase())  //which would be start(), therefore, referencing the obj and not going global
      }, 2000)
    },
    stop() {
      clearInterval(this.timerId);//had to create a 'this.timerId' in order to call the set interval and being able to stop it
      console.log('THE END')  
    }
}
// Can be done simpler by the use of other advanced features such as bind, etc. The point here to use 'this' and to see the 
//quality in arrow functions not having their own 'this' and having to use from a layer above