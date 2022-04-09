const baseUrl = 'http://localhost:4000/comment';



exports.addComment = async({user, comment }) => {
    try {
        let response = await fetch(`${baseUrl}/add`, {
            headers : {
                'Content-Type' : 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({user, comment })
        })
        let result = await response.json();
        return result;
    }
    catch(err) {
        throw new Error(err);
    }
}
