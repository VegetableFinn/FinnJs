import './PlanPage.less';
import util from '../../common/util.js';

import React from 'react';
import { Table, Icon,Modal } from 'antd' ;

import AddPlanModel from './AddPlanModel'

const PlanPage = React.createClass({
  getInitialState() {
    return {
      planDataList:[]
    };
  },


  getColumns() {
    const self = this;
    return [{
      title: '内容',
      dataIndex: 'content',
      key: 'content',
    }, {
      title: '当前进度',
      dataIndex: 'progress',
      key: 'progress',
    }, {
      title: '完成度',
      dataIndex: 'percent',
      key: 'percent',
    }, {
      title: '开始时间',
      dataIndex: 'startDt',
      key: 'startDt',
    }, {
      title: '结束时间',
      dataIndex: 'endDt',
      key: 'endDt',
    }];
  },


  getDataSource(planDataList) {
    const dataSource = [];
    let index = 0;
    planDataList.forEach(planData=> {
      const row = new Object();
      row.key = index;
      row.content = planData.content;
      row.startDt = planData.startDt;
      row.endDt = planData.endDt;
      row.id = planData.id;
      row.progress = planData.progress;
      row.percent = planData.percent;
      index = index + 1;
      dataSource.push(row);
    });

    return dataSource;
  },

  componentDidMount(){
    this.refreshData()
  },

  refreshData(){

    var self = this;
    $.ajax({
      type: "get",
      url: util.getBaseUrl() + "plan/getActivePlans.json",
      xhrFields: {
        withCredentials: util.getCredentialTag()
      },
      beforeSend: function(XMLHttpRequest){
        //ShowLoading();
      },
      success: function(data, textStatus){
        const resultJson = JSON.parse(data);
        if(resultJson.success){
          self.setState({
            planDataList: resultJson.planList
          });

        }
      },
      complete: function(XMLHttpRequest, textStatus){
        //HideLoading();
      },
      error: function(){
        //请求出错处理
      }
    });
  },


  render() {
    const data = this.state.planDataList;
    const dataSource = this.getDataSource(data);
    const columns = this.getColumns();
    return (
      <div className="plan-main">
        <div className="plan-tools">
          <AddPlanModel handleRefresh={this.refreshData} ></AddPlanModel>
        </div>
        <Table
          columns={columns}
          dataSource={dataSource} />
      </div>
    );
  },
});

export default PlanPage;
