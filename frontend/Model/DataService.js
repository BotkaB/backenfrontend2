export default class DataService {


constructor() {
    console.log("DataServise");
    axios.defaults.baseURL="http://127.0.0.1:8000/api"
  }

  getData(vegpont, callback) {
    axios
      .get(vegpont)
      .then(function (response) {
       
      console.log(response);
        console.log(response.data);
        //console.log(response.data.név); 
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
    console.log(vegpont,id)
    axios
    .delete(vegpont+"/"+id)
    .then(function (response) {
      console.log(response);
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
