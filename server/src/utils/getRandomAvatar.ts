import axios from "axios";

type Gender = 'male' | 'female'

export default async function getRandomAvatar(username: string, gender: Gender) {
    return axios.get(`https://avatars.dicebear.com/api/${gender}/${username}.svg?background=%230000ff`)
}