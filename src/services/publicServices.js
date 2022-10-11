import axios from "../setup/axios/SetupAxios"

/*********************
   public blogs routes
 **********************/

const getBlogs = async () => {
    const { data } = await axios.get(`/blogs`)
    return data
};

const getBlog = async(id) => {
    const {data} = await axios.get(`/blogs/${id}`);
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
};

const recentBlogs = async() => {
    const {data} = await axios.get(`/blogs/recent/blogs`)
    return data
};

export const publicServices = {
    getBlogs,
    getBlog,
    createBlog,
    recentBlogs
};