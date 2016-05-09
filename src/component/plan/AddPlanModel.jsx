import './PlanPage.less';
import util from '../../common/util.js';

import React from 'react';
import { Button, Form, Input, Modal, Select, Checkbox, DatePicker } from 'antd';
const createForm = Form.create;
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;

let AddPlanModel = React.createClass({
  getInitialState() {
    return {
      visible: false,
      startDt: "",
      endDt: ""
    };
  },

  handleSubmit() {
    // console.log(this.props.form.getFieldsValue());
    const formdata = this.props.form.getFieldsValue();
    let data = {
      content: formdata.content,
      total: formdata.total,
      unit: formdata.unit,
      startDt: this.state.startDt,
      endDt: this.state.endDt
    };
    const self = this;
    $.ajax({
      type: "get",
      url: util.getBaseUrl() + "plan/addPlan.json",
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
  onDateChange(value) {
    // console.log('From: ', value[0], ', to: ', value[1]);
    this.state = {
      startDt: value[0],
      endDt: value[1]
    }
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
        <Button type="primary" onClick={this.showModal}>安排新计划</Button>
        <Modal
          title="安排新计划"
          visible={this.state.visible}
          onOk={this.handleSubmit}
          onCancel={this.hideModal}>
          <Form horizontal form={this.props.form}>
            <FormItem
              {...formItemLayout}
              label="内容：">
              <Input
                {...getFieldProps('content', {})}
                type="text"
                autoComplete="off" />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="总量：">
              <Input
                {...getFieldProps('total', {})}
                type="text"
                autoComplete="off" />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="单位：">
              <Select {...getFieldProps('unit', {})}>
                <Option value="H">小时</Option>
                <Option value="C">次</Option>
              </Select>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="时间：">
              <RangePicker
                onChange={this.onDateChange} />
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  },
});
AddPlanModel = createForm()(AddPlanModel);
export default AddPlanModel;
