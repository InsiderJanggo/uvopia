import httpCommon from "../http-common";

class MessageService {
    getAuthor(id: any) {
        return httpCommon.get(`/users/${id}`)
    }
    getAll() {
        return httpCommon.get(`/messages`)
    }
    getOne(id: any) {
        return httpCommon.get(`/messages/${id}`)
    }
}

export default new MessageService()