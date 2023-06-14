# mock-server

>这是一个简易版方便前端 mock 数据的一个 server proxy
> 
>如请求 `http://test.ark.io/api/test` 接口,当 `/test` 没有被 mock 的时候,会请求原始接口,并携带 cookie 等信息,来响应前端请求

## 运行
```
npm run start
```
> 首次运行会报错,因为常量文件夹需要自己去新建

## 目录结构

```
mock-server/
  ├── server.ts               # 入口文件，用于启动服务器
  ├── constants/              # 存储配置的常量(!!!需要自己新建,因为其中可能包括一些铭感数据,所以非必要不要提交)
  │   ├── index.ts            # 常量导出文件
  │   └── api-prefix.ts       # api, cookie 等常量
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
