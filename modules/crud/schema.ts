import { Request } from "express";
var Validator = require('jsonschema').Validator;
var v = new Validator();



    
export const createUsers:any = {
    'type': 'object',
    'properties': {
        'name': {
            'type': 'string',
            'required': true
        },
        'email': {
            'type': 'string',
            'required': true
        },
        'product': {
            'type': 'string',
            'required': true
        },
        'product_qty': {
            'type': 'integer',
            'required': true
        }
    }

}

   
export const updateUsers:any = {
    'type': 'object',
    'properties': {
        'name': {
            'type': 'string',
            'required': true
        },
        'email': {
            'type': 'string',
            'required': true
        },
        'product': {
            'type': 'string',
            'required': true
        },
        'product_qty': {
            'type': 'integer',
            'required': true
        }
    }

}

export const deleteUsers:any = {
    'type': 'object',
    'properties': {
        'name': {
            'type': 'string',
            'required': true
        }
    }
}
export interface requestData extends Request {
    name: string, // or any other type
    email:string,
    product:string,
    product_qty:number
  }



export const validate = function ( object:any,schema:any) {
    let errors = v.validate(object,schema).errors
    if (errors.length > 0) {
        console.log('Schema validation failed for id:- %s errors:- %j', schema, errors);
    }
    return errors.length <= 0
}






