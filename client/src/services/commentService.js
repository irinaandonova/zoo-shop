const baseUrl = 'http://localhost:4000/comment';

exports.getAll = async() => {
    try {
        let response = await fetch(`${baseUrl}/all`);
        let all = await response.json();
        return all;
    }
    catch(err) {
        console.log(err);
        return 'Couldnot get comments'
    }
}


