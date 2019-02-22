import React, { Component } from 'react'
import Table from 'antd/lib/table'
import { Cascader } from 'antd';
import { cityArray } from './cityData';
import moment from 'moment';

const onChange = value => console.log(value)

const columns = [{
  title: '名称',
  dataIndex: 'name',
}, {
  title: '所在地',
  dataIndex: 'provice',
  render: (text) => {
    return <Cascader options={cityArray} onChange={onChange} placeholder="Please select" />
  },
}, {
  title: '创建时间',
  dataIndex: 'createdAt',
  render: (text) => {
    return <span>{moment(text).format('YYYY-MM-DD hh:mm:ss')}</span>
  },
}]

class AntCascader extends Component {
  state = {
    footBallClub: [{
      name: 'Barcelona',
    }, {
      name: 'Real Madrid',
    }]
  }

  render() {
    return (
      <div>
        <div className='white-block'>
          <Table columns={columns}
            dataSource={this.state.footBallClub}
            pagination={{ defaultPageSize: 10 }}
            rowKey={record => record.dataIndex}
          />
        </div>
      </div>
    )
  }
}

export default AntCascader
