type PersonInfo = readonly [string,number,boolean]

const displayPerson = (person:PersonInfo)=>{
  const [ name, age, hasDriverLicense ] = person
  console.log(`Name ${name} Age ${age} DriverLicense ${hasDriverLicense}`)

}


displayPerson(['deepanshu',19,false]





)
