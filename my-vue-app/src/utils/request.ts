import axios from "axios"
import Nprogress from 'nprogress'

let baseURL = "/api"
const service = axios.create({
    baseURL,
    timeout: 5000
});
// 发送请求之前的拦截器
service.interceptors.request.use(
    config => { 
        // Nprogress.start()
        const token = window.localStorage.getItem("accessToken");
        if (token) { 
            config.headers = config.headers || {};
            config['headers']['Authorization'] = token;
        }
        return config;
    },
    err => { 
        Nprogress.done()
        Promise.reject(err);
    }
)
// 响应拦截器
service.interceptors.response.use(
    response => {
        Nprogress.done()
        const res = response.data;
        if (response.status != 200) {
            return Promise.reject(new Error(res.message || "Error"));
        } else {
            return res;
        }
    },
    err => {
        // Nprogress.done()
        Promise.reject(err)
    }
);
interface ResType<T> {
  code: number
  data?: T
  msg: string
  err?: string
}
interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>
  post<T>(url: string, params?: unknown): Promise<ResType<T>>
}

const httpServer: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      service
        .get(url, { params })
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
        })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      service
        .post(url, JSON.stringify(params))
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
        })
    })
  }
}

export default httpServer;