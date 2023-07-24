import { reactive } from "vue";

export default reactive({
  baseUrl: "http://localhost:8000/",
  search: "",
  type: 0,
  arrTypes: [],
  page: 1,
  maxPages: 0,

  getImageUrl(image) {
    return image ? this.baseUrl + "storage/" + image : this.baseUrl + "storage/default.jpg";
  },
});
