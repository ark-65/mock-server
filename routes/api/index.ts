import express from "express";
import axios from "axios";
import { COOKIE, DOMAIN } from "../../constants";
import qs from "qs";
import { versionMock } from "../../data";

const router = express.Router();

// 模拟数据
const mockData = versionMock;

// 使用更具体的模式代替"*"
router.all("/:path*", async (req, res) => {
  const fullPath = req.originalUrl; // 获取完整的路径

  // 获取完整的原始 URL
  // const originalUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  // console.log("原始 URL:", originalUrl);

  // 获取完整的子路由
  // 移除开头的斜杠以匹配mock数据键
  const subRoute = req.path.startsWith("/") ? req.path.substring(1) : req.path;
  console.log("子路由:", subRoute);

  // 获取 Token
  const token = req.headers["authorization"];
  console.log("Token:", token);

  // 获取 Cookie
  // const cookies = req.cookies;
  // const cookies = COOKIE;
  // console.log('Cookies:', cookies);

  // 获取请求方法和 payload
  const method = req.method;
  const payload = method === "GET" ? qs.stringify(req.query) : req.body;
  console.log("请求方法:", method);
  console.log("请求载荷:", payload);

  // 获取 URL 中问号后面的参数
  const queryParams = req.query;
  console.log("查询参数:", queryParams);

  // 检查本地是否存在对应的 mock 数据
  if (mockData.hasOwnProperty(subRoute)) {
    const mockFn = mockData[subRoute];
    if (mockFn) {
      const data = mockFn(req.query);
      res.json(data);
    }
  } else {
    try {
      // 不存在 mock 数据，转发请求到后端
      // 修复URL构建，确保正确代理到域名
      // 从fullPath中提取路径部分，去掉API_PREFIX
      // const apiPath = fullPath.replace(`/${API_PREFIX}`, '');
      const url = `${DOMAIN}${fullPath}`;
      console.log("转发请求到:", url);

      const response = await axios({
        url,
        method,
        headers: {
          Authorization: token, // 将 Token 添加到请求头中
          Cookie: COOKIE, // 将 Cookie 添加到请求头中
        },
        // params: queryParams, // 将 URL 中的查询参数添加到请求中
        data: payload, // 设置请求的 payload
      });
      const data = response.data;
      res.json(data);
    } catch (error) {
      // 后端请求失败
      console.error(
        "转发请求错误:",
        error instanceof Error ? error.message : String(error),
      );
      res.status(500).json({ error: "无法从后端获取数据" });
    }
  }
});

export default router;
