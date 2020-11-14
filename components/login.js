import { Card, Input, Row, Col, Button, message, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState, useRef } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();
  const submitRef = useRef();
  const handlSubmit = () => {
    setIsLoading(true);
    login({ email, password }, (err, result) => {
      if (err) throw err;
      if (!result.status) {
        Object.keys(result.errMsg).forEach((key) => {
          message.error(result.errMsg[key]);
        });
        setIsLoading(false);
      } else {
        localStorage.setItem("blog_token", result.token);
        localStorage.setItem("blog_user", JSON.stringify(result.user));
        router.replace("/");
        setIsLoading(false);
      }
    });
  };

  return (
    <div
      className="site-card-border-less-wrapper"
   
    >
      <Card title="Login" bordered={true}>
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  inputRef.current.focus();
                }
              }}
              suffix={<UserOutlined />}
            />
          </Col>
          <Col span={24}>
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              ref={inputRef}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  submitRef.current.focus();
                }
              }}
            />
          </Col>
          <Divider />
          <a href="#">Forgot Password?</a>
          <Col span={24}>
            <Button
              loading={isLoading}
              onClick={handlSubmit}
              type="primary"
              block
              ref={submitRef}
            >
              Login
            </Button>
          </Col>
          <Divider />
          <small>
            Don't have an account? <Link href="\signUp"> Sign Up</Link>
          </small>
        </Row>
      </Card>
    </div>
  );
};

export default Login;
