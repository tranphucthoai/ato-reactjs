import axiosClient from "./axiosClient";

const authorApi = {
  getAll(params) {
    const url = "/authors";
    return axiosClient.get(url, { params: params });
  },
  get(id) {
    const url = `/authors/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/authors";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "/authors";
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/authors/${id}`;
    return axiosClient.delete(url);
  },
};

export default authorApi;
