function Names() {
  let names = [
    'Josh',
    'Virat',
    'Subhman',
    'Kishan',
    'Suryakumar',
    'Nitish',
    'Dhawan',
    'Hardik',
    'Axar',
    'Jadeja',
    'Umran',
    'Bhuvi',
    'Chahal',
    'Deepak',
    'Bidyut',
    'Bumrah',
    'Dhoni',
  ]

  if (names.length < 15) {
    console.log(
      `Total Number of Names are ${names.length}..... Please Add Names`,
    )
  } else {
    console.log('Total Number of Names are', names.length)
    let searchName = 'Bidyut'

    for (i = 0; i < names.length; i++) {
      if (names[i] == searchName) {
        console.log(`Name is found ${names[i]} at position ${i}`)
        let bs = names.slice(0, i + 1)
        console.log('bs', bs)
      }
    }
  }
}

Names()
