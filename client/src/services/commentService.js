const baseUrl = 'http://localhost:4000/comments';

exports.addComment = async (body) => {
    try {
        let response = await fetch(`${baseUrl}/${body.productId}/add`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ ...body })
        })
        let result = await response.json();
        return result;
    }
    catch (err) {
        throw new Error(err);
    }
}

exports.deleteComment = async (commentId, productId) => {
    try {
        let response = await fetch(`${baseUrl}/${commentId}/delete`, {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ productId })
        })
        let result = await response.json();
        return result;
    }
    catch (err) {
        throw new Error(err);
    }
}

