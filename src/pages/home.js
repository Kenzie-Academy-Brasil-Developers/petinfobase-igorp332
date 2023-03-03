import { search, searchPost } from "../scripts/api.js";
import { newPost, editPost, deletePost } from "./post.js";

const ul = document.getElementById ('feed-list');
const imgHome = document.getElementById ('img-login');
const postBtn = document.getElementById ('no-modal');

const token = localStorage.getItem ('token');
const reqUser = await search ('token');
const reqPost = await searchPost ('token');

imgHome.src = reqUser.avatar;

export async function renderPosts(element) {
    const li = document.createElement('li');
    const boxInfo = document.createElement('div');
    const boxName = document.createElement('div');
    const avatar = document.createElement('img');
    const name = document.createElement('h4');
    const hr = document.createElement('p');
    const date = document.createElement('p');
    const boxBtn = document.createElement('div');
    const editBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    const title = document.createElement('h2');
    const article = document.createElement('article');
    const access = document.createElement('a');

    li.classList('pos-card');
    boxInfo.classList.add('infobox');
    boxName.classList.add('namebox');
    boxBtn.classList.add('buttonbox');
    editBtn.classList.add('edit-btn');
    removeBtn.classList.add('remove-btn');
    avatar.classList.add('avatar');
    hr.classList.add('hr');

    title.id = 'title-post';
    article.id = 'content-post';

    avatar.src = element.user.avatar;
    name.innerText = element.user.username;
    editBtn.innerText = 'Editar';
    removeBtn.innerText = 'Excluir';
    title.innerText = element.title;
    article.innerText = element.content;
    access.innerText = 'Acessar a Publicação';

    editBtn.addEventListener('click',async(e) =>{
        e.preventDefault();
        noModal.classList.toggle('no-modal');
        await editPost(element.id)
    })
    
     editBtn.addEventListener('click', async(e) =>{
        e.preventDefault();
        noModal.classList.toggle('no-modal');
        await deletePost(element.id)
    })

    boxName.append(avatar, name, hr, date);
    boxBtn.append(editBtn, removeBtn);
    li.append(boxInfo, title, article, access);
    ul.appendChild(li);
}

reqPost.forEach(elem => {
    renderPosts(elem)
});

postBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    noModal.classList.toggle('no-modal');
    return newPost()
})
