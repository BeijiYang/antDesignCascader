import React, { Component } from 'react'
import Table from 'antd/lib/table'
import { Cascader } from 'antd';
import moment from 'moment';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}


const columns = [{
  title: '名称',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '所在地',
  dataIndex: 'provice',
  key: 'provice',
  render: (text) => {
    return  <Cascader options={options} onChange={onChange} placeholder="Please select" />
  },
}, {
  title: '创建时间',
  dataIndex: 'createdAt',
  key: 'createdAt',
  render: (text) => {
    return <span>{moment(text).format('YYYY-MM-DD hh:mm:ss')}</span>
  },
}, {
  title: '更新时间',
  dataIndex: 'updatedAt',
  key: 'updatedAt',
  render: (text) => {
    return <span>{moment(text).format('YYYY-MM-DD hh:mm:ss')}</span>
  },
}, {
  title: '操作',
  dataIndex: '_id',
  key: '_id',
}]

class AntCascader extends Component {
  state = {
    schools: [],
    orders: [{
      name: 'Barcelona',
    },{
      name: 'Real Madrid',
    }]
  }

  render() {
    return (
      <div>
        <div>区域选择</div>
        <div className='white-block'>
          <Table columns={columns}
            dataSource={this.state.orders}
            pagination={{defaultPageSize: 10}}
            rowKey={record => record._id}
          />
        </div>
      </div>
    )
  }
}

export default AntCascader
