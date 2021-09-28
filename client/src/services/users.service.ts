import httpCommon from "../http-common";

class UserService {
    getAll() {
        return httpCommon.get('/users')
    }
    getOne(id: any) {
        return httpCommon.get(`/users/${id}`)
    }
}

export default new UserService