import express from "express";
import apiRoutes from "./routes/api/index";
import { API_PREFIX } from "./constants";
import dotenv from "dotenv";

// 从.env文件加载环境变量
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 添加中间件解析JSON和URL编码的请求体
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 在API_PREFIX路径上挂载API路由
app.use(`/${API_PREFIX}`, apiRoutes);

app.listen(PORT, () => {
  console.log(`服务器正在端口 ${PORT} 上运行`);
});
