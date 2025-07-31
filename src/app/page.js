"use client";
import React, { useEffect, useState } from "react";
import { Row, Col, Card, Form, Input, DatePicker, Space, Button } from "antd";

import { CloseOutlined } from "@ant-design/icons";
import { formatDateToTurkish } from "../utils";
import axios from "axios";
export default function Home() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [generatedNews, setGeneratedNews] = useState([]);

  const handleHaberSubmit = () => {
    setLoading(true);
    const ormObject = {
      ...form.getFieldsValue(),
      tarih: formatDateToTurkish(form.getFieldValue("tarih")),
    };

    axios
      .post("https://localhost:7052/generate", ormObject)
      .then((res) => {
        console.log("Response: ", res);
        setGeneratedNews([
          ...generatedNews,
          {
            ...res.data,
          },
        ]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error: ", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    console.log("Useffect Generated News: ", generatedNews);
  }, [generatedNews]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row  dispaly="flex" style={{ width: "70%", height: "95%" }} gutter={[0, 0]}>
        <Col span={24}>
          {/** Haber Oluşturma */}
          <Card
            style={{
              width: "100%",
              height: "50%",
              color: "white",
              border: "none",
            }}
            styles={{
              header: { color: "white", border: "solid 0.1px gray",backgroundColor: "#1B3C53" },
              body: { color: "white", border: "solid 0.1px gray" ,backgroundColor: "#456882"},
            }}
            title="Haber Üretici"
          >
            <Form form={form}>
              <Row
                style={{ width: "100%", height: "100%", color: "black" }}
                gutter={[10, 10]}
              >
                <Col
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                  span={12}
                >
                  <Form.Item
                label="Kategori"
                name="kategori"
                className="white-label"
                rules={[{ required: true, message: "Kategori giriniz!" }]}
              >
                <Input />
              </Form.Item>

                </Col>
                <Col
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                  span={12}
                >
                  <Form.Item
                    label="Tarih"
                    name="tarih"
                    className="white-label"
                    rules={[{ required: true, message: "Tarih giriniz!" }]}
                  >
                    <DatePicker style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
                <Col
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                  span={12}
                >
                  <Form.Item
                    label="Lokasyon"
                    name="lokasyon"
                    className="white-label"
                    rules={[{ required: true, message: "Lokasyon giriniz!" }]}
                    type="text"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                  span={12}
                >
                  <Form.Item
                    label="Kaynak"
                    name="kaynak"
                    className="white-label"
                    rules={[{ required: true, message: "Kaynak giriniz!" }]}
                    type="text"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                  span={24}
                >
                  <Form.Item
                    label="Haberin Detayı"
                    name="detaylar"
                    className="white-label"
                    rules={[{ required: true, message: "Detaylar giriniz!" }]}
                    type="text"
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row
                style={{
                  width: "100%",
                  height: "100%",
                  color: "black",
                  border: "0.1px solid gray",
                  borderRadius: "5px",
                }}
              >
                <Col
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                  span={24}
                >
                  {/* Nest Form.List */}
                  <Form.Item label="Röportajlar"
                  className="white-label">
                    <Form.List name="roportajlar">
                      {(subFields, subOpt) => (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            rowGap: 16,
                          }}
                        >
                          {subFields.map((subField) => (
                            <Space key={subField.key}>
                              <Form.Item noStyle name={[subField.name, "kisi"]}>
                                <Input placeholder="Kişi" />
                              </Form.Item>
                              <Form.Item
                                noStyle
                                name={[subField.name, "alinti"]}
                              >
                                <Input placeholder="Röportaj" />
                              </Form.Item>
                              <CloseOutlined
                                style={{ color: "red", cursor: "pointer" }}
                                onClick={() => {
                                  subOpt.remove(subField.name);
                                }}
                              />
                            </Space>
                          ))}
                          <Button
                            type="dashed"
                            onClick={() => subOpt.add()}
                            block
                          >
                            +Röportaj Ekle
                          </Button>
                        </div>
                      )}
                    </Form.List>
                  </Form.Item>
                </Col>
              </Row>
              <Row
                style={{
                  width: "100%",
                  height: "100%",
                  color: "black",
                  borderRadius: "5px",
                }}
              >
                <Col
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                  span={24}
                >
                  <Form.Item type="submit">
                    <Button
                      name="submit"
                      htmlType="submit"
                      type="primary"
                      style={{ width: "100%" , backgroundColor: "#213448"}}
                      loading={loading}
                      onClick={() => handleHaberSubmit()}
                    >
                      {loading ? "Haber Oluşturuluyor..." : "Haber Oluştur"}
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
        <Col span={24}>
          {/** Haberler */}
          <Card
            style={{
              width: "100%",
              height: "50%",
              color: "white",
              border: "none",
              backgroundColor: "#1B3C53",
            }}
            styles={{
              header: { color: "white", border: "solid 0.1px gray" },
              body: { color: "black", border: "solid 0.1px gray",backgroundColor: "#456882" },
            }}
            title="Haberler"
           
          >
            <Row
              style={{ width: "100%", height: "100%", color: "black",backgroundColor: "#456882" }}
              gutter={[10, 10]}
            >
              {generatedNews.map((news) => (
                <Col
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                  span={24}
                >
                  <Card title={news.baslik}>
                    
                      ÖZET: {news.ozet}
                      <br/>
                      HABER: {news.haberMetni}
                      </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
