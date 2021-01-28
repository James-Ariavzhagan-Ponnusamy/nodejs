exports.i = 'it exports'
console.log(this)

module.exports = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () { 
        return this.firstName + ' ' + this.lastName;
    }
}

let util={
  f1:function(){
   console.log(this)
  },
  f2:() => {
   console.log(this)
  }
}

util.f2()