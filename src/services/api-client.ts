import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '864677ed853a4518b72df539c76da497'
    }
})