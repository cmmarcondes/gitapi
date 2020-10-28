import api from "../api";

class RepoService {
  constructor() {
    throw new Error("Esta classe não pode ser instanciada");
  }

  static getRepo(data: any, name: any): Promise<any> {
    return new Promise((resolve, reject) => {
      api
        .get(`/${name}/repos`, data)
        .then((data) => {
          resolve(data);
        })
        .catch((data) => {
          reject(data);
        });
    });
  }
}

export default RepoService;