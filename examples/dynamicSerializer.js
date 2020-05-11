/* eslint-disable no-console */
import { types } from '../lib/index';
import ByteBuffer from 'bytebuffer';

let abi = {
  ____comment:
    'This file was generated by gxb-abigen. DO NOT EDIT - 2018-07-19T11:11:37',
  version: 'gxb::abi/1.0',
  types: [
    {
      new_type_name: 'account_name',
      type: 'uint64'
    }
  ],
  structs: [
    {
      name: 'hi',
      base: '',
      fields: [
        {
          name: 'user',
          type: 'account_name'
        }
      ]
    },
    {
      name: 'account',
      base: '',
      fields: [
        {
          name: 'owner',
          type: 'account_name'
        },
        {
          name: 'assets',
          type: 'asset[]'
        }
      ]
    },
    {
      name: 'lockrule',
      base: '',
      fields: [
        {
          name: 'id',
          type: 'uint64'
        },
        {
          name: 'account_id',
          type: 'uint64'
        },
        {
          name: 'lock_time_point',
          type: 'int64'
        },
        {
          name: 'lock_duration',
          type: 'int64'
        },
        {
          name: 'release_time_point',
          type: 'int64'
        },
        {
          name: 'release_duration',
          type: 'int64'
        },
        {
          name: 'asset_id',
          type: 'uint64'
        },
        {
          name: 'asset_amount',
          type: 'int64'
        },
        {
          name: 'released_amount',
          type: 'int64'
        }
      ]
    },
    {
      name: 'lockasset',
      base: '',
      fields: [
        {
          name: 'from',
          type: 'uint64'
        },
        {
          name: 'to',
          type: 'account_name'
        },
        {
          name: 'lock_duration',
          type: 'int64'
        },
        {
          name: 'release_duration',
          type: 'int64'
        }
      ]
    },
    {
      name: 'tryrelease',
      base: '',
      fields: [
        {
          name: 'who',
          type: 'uint64'
        },
        {
          name: 'asset_id',
          type: 'uint64'
        }
      ]
    }
  ],
  actions: [
    {
      name: 'lockasset',
      type: 'lockasset',
      ricardian_contract: ''
    },
    {
      name: 'tryrelease',
      type: 'tryrelease',
      ricardian_contract: ''
    }
  ],
  tables: [
    {
      name: 'account',
      index_type: 'i64',
      key_names: ['owner'],
      key_types: ['account_name'],
      type: 'account'
    },
    {
      name: 'lockrule',
      index_type: 'i64',
      key_names: ['id'],
      key_types: ['uint64'],
      type: 'lockrule'
    }
  ],
  ricardian_clauses: [],
  error_messages: [],
  abi_extensions: []
};

let serialize = (action, params) => {
  let struct = abi.structs.find((s) => s.name === action);
  let b = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
  struct.fields.forEach((f) => {
    let value = params[f.name];
    let type = types[f.type];
    if (!type) {
      let t = abi.types.find((t) => t.new_type_name === f.type);
      if (t) {
        type = types[t.type];
      }
    }
    if (type) {
      type.appendByteBuffer(b, value);
    }
  });
  return new Buffer(b.copy(0, b.offset).toBinary(), 'binary');
};

let result = serialize('hi', { user: '1.2.342' });
console.log(result.toString('hex'));
