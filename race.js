// Assign race number randomly
let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 24;
// Control flow to add 1000 to raceNumber if the runner is an adult and registered early
if (runnerAge > 18 && registeredEarly){
  raceNumber += 1000;
}
// Control flow to check age and registration time to determine race time
if (runnerAge > 18 && registeredEarly) {
  console.log(`Runner with race number ${raceNumber} will race at 9:30 am.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Runner with race number ${raceNumber} will race at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`Runner with race number ${raceNumber} will race at 12:30 pm.`);
} else {
  console.log('Runner to see the registration desk.');//this is for runners with 18 years.
}
