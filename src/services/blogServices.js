import axios from "../setup/axios/SetupAxios"

/*********************
   public blogs routes
 **********************/

const getBlogs = async () => {
    const { data } = await axios.get(`/blogs`)
    return data
};


const createBlog = async (values) => {
    console.log(values);
    const { title, description, coverImage } = values
    const response = await axios.post(`/user/blogs`, {
        title,
        description,
        coverImage
    }
    );
    return response.data;
}

export const blogServices = {
    getBlogs,
    createBlog
};