import './DailyPage.less';
import util from '../../common/util.js';

import React from 'react';
import { Button, Form, Input, Modal, Select, Checkbox } from 'antd';
const createForm = Form.create;
const FormItem = Form.Item;

let AddDailyModel = React.createClass({
  getInitialState() {
    return { visible: false,
      isduration: "T"
     };
  },

  handleSubmit() {
    // console.log(this.props.form.getFieldsValue());
    const formdata = this.props.form.getFieldsValue();
    let data = {
      type: formdata.type,
      isDuration: "T",
      content: formdata.content
    };
    if(formdata.checked == false){
      data.isDuration = "F";
    }
    const self = this;
    $.ajax({
      type: "get",
      url: util.getBaseUrl() + "daily/addDaily.json",
      data: data,
      xhrFields: {
        withCredentials: util.getCredentialTag()
      },
      beforeSend: function(XMLHttpRequest){
        //ShowLoading();
      },
      success: function(data, textStatus){
        const resultJson = JSON.parse(data);
        if(resultJson.success){
          // self.refreshData();
          self.props.handleRefresh();
        }
      },
      complete: function(XMLHttpRequest, textStatus){
        //HideLoading();
      },
      error: function(){
        //请求出错处理
      }
    });
    this.hideModal();
  },

  showModal() {
    this.setState({ visible: true });
  },

  hideModal() {
    this.setState({ visible: false });
  },

  render() {
    const { getFieldProps } = this.props.form;
    const isduration = this.state.isduration;

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };

    return (
      <div>
          <Button type="primary" onClick={this.showModal}>添加一个新日程</Button>
          <Modal title="添加一个新日程" visible={this.state.visible} onOk={this.handleSubmit} onCancel={this.hideModal}>
            <Form horizontal form={this.props.form}>
              <FormItem
                {...formItemLayout}
                label="类型：">
                <Select {...getFieldProps('type', {})}>
                  <Option value="Coding">Coding</Option>
                  <Option value="Outing">Outing</Option>
                  <Option value="Relaxing">Relaxing</Option>
                  <Option value="Exercising">Exercising</Option>
                  <Option value="Studying">Studying</Option>
                  <Option value="Sleeping">Sleeping</Option>
                </Select>
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="是否可持续：">
                  <Checkbox defaultChecked={true} {...getFieldProps('checked', {})}/>是否可持续
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="内容：">
                <Input {...getFieldProps('content', {})} type="text" autoComplete="off" />
              </FormItem>
            </Form>
          </Modal>
        </div>
    );
  },
});
AddDailyModel = createForm()(AddDailyModel);
export default AddDailyModel;
