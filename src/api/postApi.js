import axiosConfig from "@/utils/axiosConfig"


export function getPosts() {
    return axiosConfig({
        url: "/posts"
    })
}

export function getPost(postId) {
    return axiosConfig({
        url: `/posts/${postId}`
    });
}