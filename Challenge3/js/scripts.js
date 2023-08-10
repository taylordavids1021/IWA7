const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '9394'

const sarahName = 'Sarah'                                               // remove space
const sarahSurname = 'Kleinhans'
const sarahBalance = '4582.2'

const divider = '\n----------------------------------'                  // \n to put text in the next line

// Only change below this line

const owed = parseInt(leoBalance) + parseFloat(sarahBalance)            // exchange to parseFloat
const leo = `${leoName} ${leoSurname} (Owed R${parseFloat(leoBalance).toFixed(2)})`              // remove + signs leoSurname leoBalance & exchange string to number with 2 decimal
const sarah = `\n${sarahName} ${sarahSurname} (Owed R${parseFloat(sarahBalance).toFixed(2)})`  // remove + signs Sarahname sarahBalance & exchange string to number with 2 decimal
const total = `\n\tTotal amount owed: R${owed.toFixed(2)}`                                 // \t add space before text
const result = leo + sarah + divider + total + divider

console.log(result)