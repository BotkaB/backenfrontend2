export default class DataService {


constructor() {
    console.log("DataServise");
    axios.defaults.baseURL="http://127.0.0.1:8000"
  }

  getData(vegpont, callback) {
    axios
      .get(vegpont)
      .then(function (response) {
       
      console.log(response);
        console.log(response.data);
        console.log(response.data.szemnyt); 
        callback(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  postData() {}

  putData() {}

  deleteData(vegpont, id) {
    axios
    .delete(vegpont+"/"+id)
    .then(function (response) {
      callback(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }
}
