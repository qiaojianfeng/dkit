// request.ts
import { request } from '@tarojs/taro';

// 定义请求配置类型
interface RequestConfig {
  url: string;
  method?: 'GET' | 'POST';
  data?: any;
  header?: any;
}

// 封装的 request 方法
export const myRequest = async (config: RequestConfig): Promise<any> => {
  try {
    // 发送请求
    const response = await request({
      url: config.url,
      method: config.method || 'GET',
      data: config.data,
      header: config.header,
    });

    // 处理响应数据
    return response.data;
  } catch (error) {
    // 处理错误
    throw error;
  }
};
