let genderType = "male" //value changed into 'male'
function printGender() {
    let color = "brown"
    if(genderType === "female") {
        var age = 30
        let color = "pink"
        console.log("inside block scope:",color)
    }
   console.log("outside block and inside function scope:",age)
}
printGender()
console.log("Globally-outside func block:",genderType)
