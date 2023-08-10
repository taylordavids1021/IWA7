const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'                                               // remove space
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '\n----------------------------------'                  // \n to put text in the next line

// Only change below this line

const owed = parseInt(leoBalance + sarahBalance)
const leo = `${leoName} ${leoSurname} (Owed R${leoBalance})`              // remove + signs leoSurname leoBalance
const sarah = `\n${sarahName} ${sarahSurname} (Owed R${sarahBalance})`  // remove + signs Sarahname sarahBalance
const total = `\n\tTotal amount owed: `                                 // \t add space before text
const result = leo + sarah + divider + total + owed + divider

console.log(result)