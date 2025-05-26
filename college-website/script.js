// This file contains the JavaScript code for the bulletin board functionality.

document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.getElementById('postForm');
    const postContent = document.getElementById('postContent');
    const postsDiv = document.getElementById('posts');

    // 게시글 저장용 배열 (새로고침 시 사라짐)
    let posts = [];

    // 게시글 화면에 출력
    function renderPosts() {
        postsDiv.innerHTML = '';
        posts.slice().reverse().forEach(function (content) {
            const postEl = document.createElement('div');
            postEl.className = 'post';
            postEl.textContent = content;
            postsDiv.appendChild(postEl);
        });
    }

    // 폼 제출 이벤트
    postForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const content = postContent.value.trim();
        if (content) {
            posts.push(content);
            postContent.value = '';
            renderPosts();
        }
    });

    // 페이지 로드시 초기 렌더링
    renderPosts();
});