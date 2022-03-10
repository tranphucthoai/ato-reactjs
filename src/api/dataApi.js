import axiosClient from "./axiosClient";

const dataApi = {
  getAll(params) {
    const url = "/data";
    return axiosClient.get(url, { params: params });
  },
  get(id) {
    const url = `/data/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/data";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "/data";
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/data/${id}`;
    return axiosClient.delete(url);
  },
};

export default dataApi;
