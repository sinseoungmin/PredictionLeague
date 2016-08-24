import authActions from './auth'
import download from './download'
import pick from './pick'
import pick1 from './pick1'
import pick2 from './pick2'
import userPick from './userPick'

module.exports = Object.assign({},authActions, download, pick, pick1, pick2, userPick);
