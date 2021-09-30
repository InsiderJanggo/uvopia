import httpCommon from "../http-common";

class RoomService {
    getOwner(id: any) {
        return httpCommon.get(`/users/${id}`)
    }
    getAll() {
        return httpCommon.get('/rooms')
    }
    getOne(id: any) {
        return httpCommon.get(`/rooms/${id}`)
    }
}

export default new RoomService()