module.exports = function toReadable (number) {

const a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const b = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
        
        if (number < 20) return a[number];
        if (number < 100) {
            if(number%10 > 0)
            return b[Math.floor(number/10)-2] + ' ' + a[number%10];
            else
            return b[Math.floor(number/10)-2];
        }
        if (number < 1000) {
            if(number%100 > 0)
            return a[Math.floor(number/100)] +' '+'hundred' +  " " + toReadable(number%100);
            else
            return a[Math.floor(number/100)] +' '+'hundred' ;
        }
    } 



