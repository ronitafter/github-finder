import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GIT_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;


//creating an instance of axios
const github = axios.create({
	baseURL: GITHUB_URL,
	headers: { Authorization: `token ${GITHUB_TOKEN}` },

})

// get search results
export const searchUsers = async (text) => {
	const params = new URLSearchParams({
		q: text,
	});

	const response = await github.get(`/search/users?${params}`)
	return response.data.items

}

//get users and repos
export const getUsersAndRepos = async (login) => {
	const [user, repos] = await Promise.all([
		github.get(`/users/${login}`),
		github.get(`/users/${login}/repos`)

	])

	//return an object eith a user and repos
	return { user: user.data, repos: repos.data }
}