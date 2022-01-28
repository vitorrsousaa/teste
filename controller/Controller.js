class Controller {
  async index(request, response) {
    const data = {
      name: "vitor",
      age: "45",
    };
    response.json(data);
  }
}

module.exports = new Controller();
