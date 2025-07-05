# mock-server

>这是一个简易版方便前端 mock 数据的一个 server proxy
> 
>如请求 `http://test.ark.io/api/test` 接口,当 `/test` 没有被 mock 的时候,会请求原始接口,并携带 cookie 等信息,来响应前端请求

## 配置
在项目根目录创建 `.env` 文件，配置以下环境变量：
```
PORT=3000  # 服务器启动端口，默认为 3000
```

## 运行
```
# 首次运行前，请先安装依赖
yarn
# 或者
npm install

# 然后启动服务
npm run start
```
> 首次运行前，请确保已创建 `.env` 文件并配置好环境变量



## 目录结构

```
mock-server/
  ├── server.ts               # 入口文件，用于启动服务
  ├── .env                    # 环境变量配置文件（包含 PORT 等配置）
  ├── constants/              # 存储配置的常量(!!!需要自己新建,因为其中可能包括一些敏感数据,所以非必要不要提交)
  │   ├── index.ts            # 常量导出文件
  │   ├── api-prefix.ts       # API前缀和域名配置
  │   └── request-header.ts   # 请求头配置（如Cookie等）
  ├── routes/                 # 存放路由处理程序
  │   ├── index.ts            # 主路由处理程序
  │   └── api/                # API路由处理程序
  │       ├── index.ts        # API路由主处理逻辑
  │       └── mock-urls.ts    # 模拟URL配置
  ├── data/                   # 存放模拟数据文件(需要自己新建,其中可能包括业务数据)
  │   └── index.ts            # 模拟数据定义
  ├── package.json            # 项目配置文件
  └── tsconfig.json           # TypeScript 配置文件
```
