import getRefAction from './getRef.action/getRef.action'
import generate2FaAction from './generate2FaQr.action/generate2Fa.action'
import save2FaQrAction from './save2FaQr.action/save2FaQr.action'

const userActions = {
    getRef: getRefAction,
    generate2FaQr: generate2FaAction,
    save2FaQr: save2FaQrAction,
}

export default userActions