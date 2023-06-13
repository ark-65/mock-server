import express from 'express';
import axios from 'axios';
import {API_PREFIX, DOMAIN} from "../../constants";

const router = express.Router();

// 模拟数据
const mockData: { [key: string]: { message: string } } = {
    'a': { message: 'Mocked data for a' },
    'b': { message: 'Mocked data for b' },
};

router.get('*', async (req, res) => {
    const fullPath = req.originalUrl; // 获取完整的路径

    // 获取完整的原始 URL
    const originalUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log('Original URL:', originalUrl);

    // 获取完整的子路由
    const subRoute = req.path.replace(`/${API_PREFIX}`, '');
    console.log('Subroute:', subRoute);

    // 获取 Token
    const token = req.headers['authorization'];
    console.log('Token:', token);

    // 获取 Cookie
    const cookies = req.cookies;
    console.log('Cookies:', cookies);

    // 获取 URL 中问号后面的参数
    const queryParams = req.query;
    console.log('Query Parameters:', queryParams);

    // 检查本地是否存在对应的 mock 数据
    if (mockData.hasOwnProperty(subRoute)) {
        const data = mockData[subRoute];
        res.json(data);
    } else {
        try {
            // 不存在 mock 数据，转发请求到后端
            const url = `${DOMAIN}${fullPath}`
            console.log(url);
            const response = await axios.get(url, {
                headers: {
                    Authorization: token, // 将 Token 添加到请求头中
                    // Cookie: Object.keys(cookies).map((key) => `${key}=${cookies[key]}`).join('; '), // 将 Cookie 添加到请求头中
                },
                params: queryParams, // 将 URL 中的查询参数添加到请求中
            });
            const data = response.data;
            res.json(data);
        } catch (error) {
            // 后端请求失败
            res.status(500).json({ error: 'Failed to fetch data from backend' });
        }
    }
});


export default router;
