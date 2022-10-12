const components = require('@my-component/components')
const utils = require('@my-component/utils')

function businessComponent() {
  components()
  utils()
  console.log('businessComponent')
  console.log('businessComponent pre2')
}

module.exports = businessComponent
