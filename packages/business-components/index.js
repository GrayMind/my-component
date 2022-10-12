const components = require('@my-component/components')
const utils = require('@my-component/utils')

function businessComponent() {
  components()
  utils()
  console.log('businessComponent')
}

module.exports = businessComponent
