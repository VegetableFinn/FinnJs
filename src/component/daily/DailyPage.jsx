import './DailyPage.less';
import util from '../../common/util.js';

import React from 'react';
import { Table, Icon } from 'antd' ;




const DailyPage = React.createClass({
  getInitialState() {
    return {
            dailyDataList:[]
        };
  },
    
    
    handleFinish(recordId){
        $.get(util.getBaseUrl() + "daily/endDaily.json?id="+recordId, function(result) {
          const resultList = JSON.parse(result);
          this.refreshData();
        }.bind(this));
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
                        <span>
                        <a onClick={self.handleFinish.bind(self,record.id)}>完成</a>
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
         $.get(util.getBaseUrl() + "daily/getRecent2Days.json", function(result) {
          const resultList = JSON.parse(result);
          if (this.isMounted()) {
           this.setState({
              dailyDataList: resultList
            });
          }
        }.bind(this));
    },

  render() {
      const data = this.state.dailyDataList
      const dataSource = this.getDataSource(data);
      const columns = this.getColumns();
    return (
      <div className="daily-main">
        <Table columns={columns} dataSource={dataSource} />
      </div>);
  },
});

export default DailyPage;
