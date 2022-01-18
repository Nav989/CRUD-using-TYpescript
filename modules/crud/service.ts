import  {Request, Response} from 'express';
import util from  "util";
import {createUsers,updateUsers,deleteUsers,validate} from './schema';
import {testUser,createUser,readUser ,updateUser , deleteUser} from './model'
import constants from '../../utils/constants'
import sanitize from '../../utils/common';
import  logger  from "../../utils/logger";

const test =async (req:Request, res:Response) => {

    const Ifaccess = await testUser()


    if (Ifaccess) {
        logger.info(util.format(" success "));
        res.status(constants.httpStatusCode.success).send({
            code: constants.responseCodes.successfulOperation,
            message: constants.messageKeys.en.msg_success,
            data: Ifaccess
          })
    } else {
        logger.error(util.format(" not success "));
        res.status(constants.httpStatusCode.success).send({
            code: constants.responseCodes.failedOperation,
            message: constants.messageKeys.en.msg_failed,
            data: Ifaccess
          });
    }

}

const create = async (req:Request, res:Response) => {

    const regDetails = sanitize(req.body, createUsers, constants.moduleNames.crud);
   
    if (validate(regDetails, createUsers)) {

        const Ifaccess:any = await createUser(regDetails)

        if (Ifaccess) {
            logger.info(util.format("Register success "));
            res.status(constants.httpStatusCode.success).send({
                code: constants.responseCodes.successfulOperation,
                message: constants.messageKeys.en.msg_success,
                data: Ifaccess
              })
        } else {
            logger.error(util.format("Register not success "));
            res.status(constants.httpStatusCode.success).send({
                code: constants.responseCodes.failedOperation,
                message: constants.messageKeys.en.msg_alreadyExists,
                data: Ifaccess
              })
        }

    } else {
        logger.error(util.format("Register data not validate "));
        res.status(constants.httpStatusCode.success).send({
            code: constants.responseCodes.revalidation,
            message: constants.messageKeys.en.msg_revalidate,
            data: {}
          })
    }
}

const  read  = async (req:Request, res:Response) => {


    const Ifaccess = await readUser()


    if (Ifaccess) {
        logger.info(util.format(" success "));
        res.status(constants.httpStatusCode.success).send({
            code: constants.responseCodes.successfulOperation,
            message: constants.messageKeys.en.msg_success,
            data: Ifaccess
          })
    } else {
        logger.error(util.format(" not success "));
        res.status(constants.httpStatusCode.success).send({
            code: constants.responseCodes.failedOperation,
            message: constants.messageKeys.en.msg_failed,
            data: Ifaccess
          });
    }

}


const update = async (req:Request, res:Response) => {

    const regDetails = sanitize(req.body, updateUsers, constants.moduleNames.crud);
   
    if (validate(regDetails, updateUsers)) {

        const Ifaccess:any = await updateUser(regDetails)

        if (Ifaccess) {
            logger.info(util.format(" success "));
            res.status(constants.httpStatusCode.success).send({
                code: constants.responseCodes.successfulOperation,
                message: constants.messageKeys.en.msg_success,
                data: Ifaccess
              })
        } else {
            logger.error(util.format(" not success "));
            res.status(constants.httpStatusCode.success).send({
                code: constants.responseCodes.failedOperation,
                message: constants.messageKeys.en.msg_data_updated,
                data: Ifaccess
              })
        }

    } else {
        logger.error(util.format(" data not validate "));
        res.status(constants.httpStatusCode.success).send({
            code: constants.responseCodes.revalidation,
            message: constants.messageKeys.en.msg_revalidate,
            data: {}
          })
    }
}

const deletedata = async (req:Request, res:Response) => {

    const regDetails = sanitize(req.body, deleteUsers, constants.moduleNames.crud);
   
    if (validate(regDetails, deleteUsers)) {

        const Ifaccess:any = await deleteUser(regDetails)

        if (Ifaccess) {
            logger.info(util.format(" success "));
            res.status(constants.httpStatusCode.success).send({
                code: constants.responseCodes.successfulOperation,
                message: constants.messageKeys.en.msg_success,
                data: Ifaccess
              })
        } else {
            logger.error(util.format(" not success "));
            res.status(constants.httpStatusCode.success).send({
                code: constants.responseCodes.failedOperation,
                message: constants.messageKeys.en.msg_invalid_,
                data: Ifaccess
              })
        }

    } else {
        logger.error(util.format(" data not validate "));
        res.status(constants.httpStatusCode.success).send({
            code: constants.responseCodes.revalidation,
            message: constants.messageKeys.en.msg_revalidate,
            data: {}
          })
    }
}

export {
   test,create,read,update,deletedata
}