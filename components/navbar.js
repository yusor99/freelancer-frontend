import { React } from "react";
import {
  Layout,
  Menu,
  Input,
  Col,
  Row,
  Button,
  Popover,
  Avatar,
  Typography,
} from "antd";
import CompFooter from "./../components/footer";
import Link from "next/link";
const { Title, Text } = Typography;
import {
  UserOutlined,
  HddOutlined,
  FormOutlined,
  CarOutlined,
  MailOutlined,
  ShoppingOutlined,
  BellOutlined,
  TeamOutlined,
  QuestionCircleOutlined,
  MessageOutlined,
  SearchOutlined,
  HomeOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const { Search } = Input;
const { Header, Sider, Content, Footer } = Layout;

export default function NavBar(props) {
  const [collapsed, setCollapsed] = useState(false);
  const onSearch = (value) => console.log(value);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const onCollapse = () => {
    setCollapsed(collapsed);
  };
  return (
    <>
      <Layout className="layout">
        <Sider
          collapsible
          style={{
            height: "100vh",
            position: "fixed",
            left: 0,
            margin: "auto",
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={props.defaultSelectedKeys}
          >
            <Menu.Item
              key="1"
              icon={<HomeOutlined />}
              defaultSelectedKeys={["1"]}
            >
              <Link href="/">Home</Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<MailOutlined />}>
              Inbox
            </Menu.Item>
            <Menu.Item key="3" icon={<BellOutlined />}>
              Notification
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<FormOutlined />}
              defaultSelectedKeys={["4"]}
            >
              <Link href="/postProject">Post Project</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<HddOutlined />}>
              <Link href="/  Categories">Categories</Link>
            </Menu.Item>

            <Menu.Item key="6" icon={<ShoppingOutlined />}>
              Purchases
            </Menu.Item>
            <Menu.Item key="7" icon={<CarOutlined />}>
              Orders
            </Menu.Item>
            <Menu.Item key="8" icon={<TeamOutlined />}>
              About us
            </Menu.Item>

            <Menu.Item key="9" icon={<QuestionCircleOutlined />}>
              Help
            </Menu.Item>
            <Menu.Item key="10" icon={<MessageOutlined />}>
              contact us
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ padding: 0, margin: 0 }}
          >
            <div className="container">
              <Row gutter={24}>
                <Col span={10}>
                  <span className="logo">
                    <h1 style={{ color: "white" }}>
                      <span style={{ color: "#87d068", fontSize: 30 }}>
                        Gigs
                      </span>
                      Worker
                    </h1>
                  </span>
                </Col>
                <Col span={10}>
                  <Input
                    placeholder="search about something"
                    prefix={<SearchOutlined />}
                    style={{border:14}}
                  />
                </Col>
                <Col span={4}>
                  <div className="user-account">
                    <Text style={{ color: "#fff", marginRight: 8 }}>
                      murtadha006
                    </Text>
                    <Popover
                      content={
                        <div>
                          <Button type="text">Change password</Button>
                          <br />
                          <Button
                            type="link"
                            onClick={() => {
                              localStorage.removeItem("blog_token");
                              localStorage.removeItem("blog_user");
                              router.replace("/login");
                            }}
                          >
                            Sign Out
                          </Button>
                        </div>
                      }
                    >
                      <Avatar
                        style={{ backgroundColor: "#87d068" }}
                        icon={<UserOutlined />}
                      />
                    </Popover>
                  </div>
                </Col>
              </Row>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "10px 8px ",
              padding: 10,
              minHeight: 280,
            }}
          >
            <div className="container cover ant-layout-sider-children">
              {props.children}
            </div>
          </Content>

          <Footer>
            <CompFooter />
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}
