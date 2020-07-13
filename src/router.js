import Router from 'vue-router'

import LoginPage from './pages/LoginPage'
import BlogPage from './pages/BlogPage'
import QuantPage from "./pages/QuantPage";

import BlogList from './components/blog/BlogList'
import Gallery from './components/blog/Gallery'
import UploadPic from './components/blog/UploadPic'
import PostArticle from './components/blog/PostArticle'
import ArticleContent from './components/blog/ArticleContent'

import ManualImport from "./components/quant/ManualImport";

let router = new Router({
    routes: [
        {
            path: '/login',
            component: LoginPage
        },
        {
            path: '/blog',
            component: BlogPage,
            children: [
                {
                    path: 'blog-list',
                    component: BlogList
                },
                {
                    path: 'gallery',
                    component: Gallery
                },
                {
                    path: 'uploadPic',
                    component: UploadPic
                },
                {
                    path: 'postArticle',
                    component: PostArticle
                },
                {
                    path: 'postArticle/:id',
                    component: PostArticle
                },
                {
                    path: 'content/:id',
                    component: ArticleContent
                }
            ]
        },
        {
            path: '/quant',
            component: QuantPage,
            children: [
                {
                    path: 'manual-import',
                    component: ManualImport
                }
            ]
        }
    ]
})

export default router
