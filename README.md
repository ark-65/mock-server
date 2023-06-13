# mock-server

## 目录结构

```
mock-server/
  ├── server.ts               # 入口文件，用于启动服务器
  ├── routes/                 # 存放路由处理程序
  │   ├── index.ts            # 主路由处理程序
  │   └── api/                # 子路由处理程序（可根据需要进行拆分）
  │       └── mock.ts         # 模拟数据路由处理程序
  ├── data/                   # 存放模拟数据文件
  │   ├── a-b-c.json          # a/b/c 接口的模拟数据
  │   └── x-y-z.json          # x/y/z 接口的模拟数据
  ├── package.json            # 项目配置文件
  └── tsconfig.json           # TypeScript 配置文件
```
