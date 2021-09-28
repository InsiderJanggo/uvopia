import httpCommon from "../http-common";

class AuthService {
    login(data: any) {
        return httpCommon.post('/auth/login', data);
    }
    register(data: any) {
        return httpCommon.post('/auth/register', data)
    }
}

export default new AuthService()