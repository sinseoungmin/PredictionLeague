export const UNIQUE_ID = {
    XMS: 'id',
    CHIST: 'id',
    CONTACTS: 'refid',
    ADDRESS: 'id',
    GROUPCHAT: 'chatId',
    GROUPSURVEY: 'surveyId'
}

export const DB_TYPE = {
    XMS: 'xms',
    CHIST: 'chist',
    CONTACTS: 'contacts',
    ADDRESS: 'address',
    INFO:'info'
}

export const COMMAND = {
    A: 'A',
    M: 'M',
    D: 'D'
}

export const SyncInfoType = {
    Contact: 0,
    CallLog: 1,
    Message: 2,
    GroupPlus: 3, // Link message
}

export const CallState = {
    'SELECT_TYPE': 0,
    'MAKE': 1,
    'RECEIVED': 2,
    'CONNECTING': 3,
    'ACCEPTING': 4,
    'TOSSING': 5,
    'CONNECTED': 10,
    'HOLD_PRESSED': 20,
    'HOLD': 21,
    'RESUME': 25,
    'TRANSFER_TRYING': 30,
    'TRANSFER_FAILED': 31,
    'TOSSED': 40,
    'DISCONNECTED': 50,
    'ERROR': 99,
}

export const InputFileFilter = {
  'IMG' : 'image/*',
  'TEXT' : 'text/plain',
  'VIDEO' : 'video/*',
  'AUDIO' : 'audio/*',
  'PDF' : '.pdf',
}

export const APP_NAME = 'Call Sync';

export const FAVORITE_SET_DELAY_CALL_TIME_MS = 3000

export const MESSAGE_AS_READ_DELAY_CALL_TIME_MS = 3000

export const LINK_START_STR = '콜싱크'

export const PC_DEFAULT_NAME = '내 PC'

export const SKT_COPYRIGHT = 'COPYRIGHT SK TELECOM CO., LTD. ALL RIGHTS RESERVED.'
