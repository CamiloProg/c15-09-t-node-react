const fs = require('fs')

// Read the JSON file
const jsonRecepie = fs.readFileSync('./Brewfather_RECIPE_BrewdogPunkIPAClone_20231123.json', 'utf-8')

// Parse the JSON string into a JavaScript object
const parsedJson = JSON.parse(jsonRecepie)

// extract relevant information
const fermentables = []

parsedJson.fermentables.forEach(fermentable => {
  const { name, potential, amount, color } = fermentable
  fermentables.push({ name, potential, amount, color })
})

const hops = []

parsedJson.hops.forEach(hop => {
  const { name, amount, use, time, ibu, alpha } = hop
  hops.push({ name, amount, use, time, ibu, alpha })
})

const yeasts = []

parsedJson.yeasts.forEach(yeast => {
  const { name, type, amount } = yeast
  yeasts.push({ name, type, amount })
})

const miscs = []

parsedJson.miscs.forEach(misc => {
  const { name, type, amount, unit } = misc
  if (type === 'Flavor' || type === 'Herb' || type === 'Spice') {
    miscs.push({ name, type, amount, unit })
  }
})

const mash = []

parsedJson.mash.steps.forEach(mashItem => {
  const { name, stepTemp, stepTime } = mashItem
  mash.push({ name, stepTemp, stepTime })
})

const fermentation = []

parsedJson.fermentation.steps.forEach(fermentationItem => {
  const { type, stepTemp, stepTime } = fermentationItem
  fermentation.push({ type, stepTemp, stepTime })
})
// get image url
const imageUrl = parsedJson.img
const token = '6b76e620-2001-49cc-876b-252e0d6e5da1'

// Replace "/" with "%2F" in the image path
const encodedImagePath = imageUrl.replace(/\//g, '%2F')

// final URL
const finalUrl = `https://firebasestorage.googleapis.com/v0/b/brewfather-app.appspot.com/o/${encodedImagePath}?alt=media&token=${token}`

const newRecepie = {
  name: parsedJson.name,
  author: parsedJson.author,
  image: finalUrl,
  type: parsedJson.type, // all grain
  abv: parsedJson.abv, // alcohol by volume
  og: parsedJson.og, // original gravity
  fg: parsedJson.fg, // final gravity
  ibu: parsedJson.ibu, // international bitterness unit
  color: parsedJson.color, // EBC (European Brewery Convention) color index
  batchSize: parsedJson.batchSize, // final production volume
  mashWaterAmount: parsedJson.data.mashWaterAmount, // water for mash
  spargeWaterAmount: parsedJson.data.spargeWaterAmount, // water for sparge
  boilTime: parsedJson.boilTime, // boiling time
  style: parsedJson.style, // beer style according to BJCP
  notes: parsedJson.notes,
  fermentables,
  hops,
  yeasts,
  miscs,
  mashTemperature: mash[0].stepTemp,
  mashTime: mash[0].stepTime,
  mashOutTemperature: mash[1].stepTemp,
  mashOutTime: mash[1].stepTime,
  fermentation
}
// Convert the newRecepie object to JSON
const jsonString = JSON.stringify(newRecepie, null, 2)

// Use the name attribute as the filename
const fileName = `${newRecepie.name.replace(/ /g, '_')}.json`

// Write to the file
fs.writeFileSync(fileName, jsonString, 'utf-8')

console.log(`File "${fileName}" created successfully.`)

console.log(newRecepie)
