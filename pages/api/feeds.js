import { ref, child, get} from "firebase/database";
import { feeddatabase } from "../../components/config/feeds";


export default function handler(req, res) {

    const dbRef = ref(feeddatabase);

    get(child(dbRef, "/posts")).then((snapshot) => {
        if (snapshot.exists()) {
        var data = snapshot.val();
        const data_keys = Object.keys(data)
        const feed_data = []

        for (var i =0; i < data_keys.length;i++) {
            var k = data[data_keys[i]]
            k['id'] = data_keys[i]
            feed_data.push(k)   
        }

        res.status(200).json(feed_data)
        }
        
    }).catch((error) => {
        console.error(error);
    });

  }

