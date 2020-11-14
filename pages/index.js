import NavBar from "./../components/navbar";
import Card from "../components/card";
import { getData } from "../api";
import { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { AuthContainer } from "./../components/main/auth";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData((err, result) => {
      if (err) throw err;

      if (!result.status) {
        setData(result);
      } else {
        Object.keys(result.errMsg).forEach((key) => {
          message.error(result.errMsg[key]);
        });
      }
    });
  });
  return (
    <NavBar defaultSelectedKeys={"1"}>
      <div>
        <br />
        <h1 className="categoryTitle">
          All creative and professional Categories <br /> to develop and grow
          your business
        </h1>
        <Row gutter={[30, 30]} style={{ marginTop: 30 }}>
          {data.map((article) => (
            <Col md={6} sm={12} xs={24} key={article.id}>
              <Card item={article} />
            </Col>
          ))}
        </Row>
      </div>
      <br />
    </NavBar>
  );
}
