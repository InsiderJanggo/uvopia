import httpCommon from "../http-common";

class UserService {
    getOne(id: any) {
        return httpCommon.get(`/users/${id}`)
    }
}

export default new UserService