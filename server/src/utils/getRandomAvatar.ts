import axios from "axios";

type Gender = 'male' | 'female'

export default function getRandomAvatar(username: string, gender: Gender) {
    return axios.get(`https://avatars.dicebear.com/api/${gender}/${username}.svg?background=%230000ff`)
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        return err;
    })
}