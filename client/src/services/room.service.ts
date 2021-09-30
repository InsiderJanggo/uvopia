import httpCommon from "../http-common";

class RoomService {
    getOwner(id: any) {
        return httpCommon.get(`/users/${id}`)
    }
    getAll() {
        return httpCommon.get('/rooms')
    }
}

export default new RoomService()