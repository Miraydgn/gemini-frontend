'use client';
import React from 'react';
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from 'antd';
import trTR from 'antd/locale/tr_TR';


export default function Providers({ children }) {

  return (
    <AntdRegistry>
      <ConfigProvider locale={trTR}>
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
}