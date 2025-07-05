// API响应的模拟数据
export const versionMock: Record<string, (params?: any) => any> = {
  // 'version'端点的模拟示例（不带前导斜杠）
  'version': (params) => {
    return {
      version: '1.0.0',
      buildDate: new Date().toISOString(),
      environment: 'development'
    };
  },

  // 'user'端点的模拟示例（不带前导斜杠）
  'user': (params) => {
    return {
      id: 1,
      username: 'testuser',
      email: 'test@example.com',
      role: 'user'
    };
  },

  // 根据需要添加更多模拟端点
};
