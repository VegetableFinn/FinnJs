import './DailyPage.less';
import util from '../../common/util.js';
import AddDailyModel from './AddDailyModel'

import React from 'react';
import { Table, Icon,Modal,Spin } from 'antd' ;

const DailyPage = React.createClass({
  getInitialState() {
    return {
      dailyDataList:[]
    };
  },


  handleFinish(recordId){
    var self = this;
    $.ajax({
      type: "get",
      url: util.getBaseUrl() + "daily/endDaily.json?id="+recordId,
      xhrFields: {
        withCredentials: util.getCredentialTag()
      },
      beforeSend: function(XMLHttpRequest){
        self.setState({
          loadingAni: true
        });
      },
      success: function(data, textStatus){
        const resultJson = JSON.parse(data);
        if(resultJson.success){
          self.refreshData();
        }
      },
      complete: function(XMLHttpRequest, textStatus){
        self.setState({
          loadingAni: false
        });
      },
      error: function(){
        //请求出错处理
      }
    });
  },


  getColumns() {
    const self = this;
    return [{
      title: '分类',
      dataIndex: 'catagory',
      key: 'catagory'
    }, {
      title: '内容',
      dataIndex: 'content',
      key: 'content',
    }, {
      title: '持续事件',
      dataIndex: 'isduration',
      key: 'isduration',
    }, {
      title: '开始时间',
      dataIndex: 'startDt',
      key: 'startDt',
    }, {
      title: '结束时间',
      dataIndex: 'endDt',
      key: 'endDt',
    }, {
      title: '持续时间',
      dataIndex: 'duration',
      key: 'duration',
    }, {
      title: '操作',
      key: 'operation',
      render(text, record) {
        const content = [];
        if (record.isduration == "True" && record.endDt == null) {
          content.push(
            <span key="spankey">
              <a onClick={self.handleFinish.bind(self,record.id)} >完成</a>
            </span>
          );

        }
        return (
          content
        );
      }
    }];
  },


  getDataSource(dailyDataList) {
    const dataSource = [];
    let index = 0;
    dailyDataList.forEach(dailyData=> {
      const row = new Object();
      row.key = index;
      row.catagory = dailyData.catagory;
      row.isduration = dailyData.duration;
      row.startDt = dailyData.startDt;
      row.endDt = dailyData.endDt;
      row.content = dailyData.content;
      row.id = dailyData.id;
      row.duration = dailyData.durationDt;

      if(dailyData.duration){
        row.isduration = "True"
      }else{
        row.isduration = "False"
      }

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
      url: util.getBaseUrl() + "daily/getRecent2Days.json",
      xhrFields: {
        withCredentials: util.getCredentialTag()
      },
      beforeSend: function(XMLHttpRequest){
        self.setState({
          loadingAni: true
        });
      },
      success: function(data, textStatus){
        const resultJson = JSON.parse(data);
        if(resultJson.success){

          self.setState({
            dailyDataList: resultJson.dailyModels
          });

        }
      },
      complete: function(XMLHttpRequest, textStatus){
        self.setState({
          loadingAni: false
        });
      },
      error: function(){
        //请求出错处理
      }
    });
  },


  render() {
    const data = this.state.dailyDataList;
    const dataSource = this.getDataSource(data);
    const columns = this.getColumns();
    const form2 = this.state.form2;
    return (
      <div className="daily-main">
        <div className="daily-tools">
          <AddDailyModel handleRefresh={this.refreshData} ></AddDailyModel>
        </div>
        <Table
          columns={columns}
          dataSource={dataSource} />

      </div>
    );
  },
});

export default DailyPage;
