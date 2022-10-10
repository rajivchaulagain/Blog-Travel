import axios from "../setup/axios/SetupAxios"

/*********************
   public blogs routes
 **********************/

const getBlogs = async () => {
    const { data } = await axios.get(`/user/blogs`)
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
        ,
        {
            headers: { "Content-Type": "multipart/form-data" }
        }
    );
    return response.data;
};

const recentBlogs = async () => {
    const { data } = await axios.get(`/blogs/recent/blogs`)
    return data
};


export const blogServices = {
    getBlogs,
    createBlog,
    recentBlogs
};