
import  lodash from "lodash"
const constants = require('../utils/constants')



let sanitize =  (object:any, schema:any, modelName:any)=> {
    let schemaKeys = lodash.keys(schema.properties)
    let objectKeys = lodash.keys(object)
    let constantsValues = lodash.values(constants.keys)
    for (let key in objectKeys) {
      let isValueMatched = false
      for (let index in constantsValues) {
        if (constantsValues[index].indexOf(objectKeys[key].substring(0, constantsValues[index].length)) === 0) {
          isValueMatched = true
          break
        }
      }
      if (!isValueMatched && schemaKeys.indexOf(objectKeys[key]) === -1) {   
        delete object[objectKeys[key]]
      } else {
        console.log("santize 123");
        let propertyList = lodash.keys(schema.properties[objectKeys[key]]);
        console.log(propertyList);
        for (let index = 0; index < propertyList.length; index++) {
          if (propertyList[index] === '$ref') {
            let refValue = schema.properties[objectKeys[key]]
            let schemas = require('../modules/' + modelName + '/' + modelName + '-schema')
            let refSchema = refValue.$ref.substring(1, refValue.$ref.length)
            sanitize(object[objectKeys[key]], schemas[refSchema],modelName)
          }
        }
      }
    }
    console.log(object);
    return object
   
  }

  export default sanitize
  