import axios from'axios'

const MOVED_REST_API_URL='http://localhost:8080/api/move';

class movedService {
    getMoved(){
        return axios.get(MOVED_REST_API_URL);
        
    }
}

export default new movedService();