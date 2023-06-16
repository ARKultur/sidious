import { apiUserInfos } from '../services/ConnectionService';


async function getInfo(uToken, uEmail) {
    try {
        const response = await apiUserInfos(uToken, uEmail);
        return response;
    } catch(error) {
        console.log(error);
    };
}


const AuthService = {
    getInfo
}

export default AuthService