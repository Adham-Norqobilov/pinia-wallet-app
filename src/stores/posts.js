import { getPost, getPosts } from "@/api/postApi"
import { defineStore } from "pinia"

export const usePostsStore = defineStore('posts', {
    state: () => ({
         posts: [],
         post: null
    }),
    getters: {
        allSummary: state => {
            return state.posts.reduce((allSum, currentValue) => allSum + currentValue.id, 0)
        },
    },
    actions: {
        getPosts() {
            getPosts()
                .then(data => {
                    console.log(data)
                    this.posts = data.data;
                });
        },
        getPost(postId) {
            getPost(postId).then(data => {
                console.log(data.data)
                this.post = data.data;
            })
        }
    }
})

