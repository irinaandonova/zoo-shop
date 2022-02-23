const baseUrl = 'http://localhost:4000/profile';

const getProfile = async (_id) => {
    const user = await fetch(`${baseUrl}/${_id}`);
    const result =  await user.json();

    console.log(result)
    if(result.status === 'ok') {
        console.log(`service ${result}`)
        return result.user;
    }
    
}

const profileService = {
    getProfile,
}

export default profileService;