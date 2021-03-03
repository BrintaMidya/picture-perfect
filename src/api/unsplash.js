import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID ePEH95AxcFu-mBHo3mHqoobNwMoAXS5Z6ao8zFHwz1o",
	},
});
