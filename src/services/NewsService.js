import {axiosInstance} from '../utils/client';

export default class NewsService {
  static getAllNews = async (feed) => {
    const Response = await axiosInstance.get(`/api.json?rss_url=${feed}`);
    return Response;
  };
}
