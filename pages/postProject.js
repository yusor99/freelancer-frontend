import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  Row,
  Card,
  Col,
  Divider,
} from "antd";
import NavBar from "./../components/navbar";

import { AuthContainer } from "./../components/main/auth";
export default function PostProject() {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <NavBar defaultSelectedKeys={"4"}>
      <Row gutter={24}></Row>
      <Card title="Post project" bordered={true} className="card-postproject">
        <Form>
          <Row>
            <h4 style={{ color: "rgba(155, 155, 155, 0.45)" }}>
              Note : It's easy. Simply post a project you need completed and
              receive competitive bids from freelancers within minutes
            </h4>
          </Row>
          <Row gutter={[24]}>
            <Col span={15}>
              <Form.Item label="title">
                <Input placeholder="enter the title of project..." />
              </Form.Item>
            </Col>
            <Col md={15} sm={24}>
              <Form.Item label="Description">
                <Input.TextArea
                  placeholder=" Enter the service description accurately. It is prohibited to enter an email,
                phone number, or other contact information."
                />
              </Form.Item>
            </Col>
            <Row gutter={24}>
              <Col md={8} sm={24}>
                <Form.Item label="Gategory">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col md={8} sm={24}>
                <Form.Item label="Budget" rules={[{ type: "number" }]}>
                  <InputNumber placeholder="The total amount of.." />
                </Form.Item>
              </Col>

              <Col md={8} sm={24}>
                <Form.Item label="Delivered time">
                  <DatePicker />
                </Form.Item>
              </Col>
            </Row>
            <Col span={24}>
              <Form.Item>
                <Button>Send Project</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </NavBar>
  );
}
