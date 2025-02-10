window.addEventListener("DOMContentLoaded", function () {
    var url_string = window.location.href; // www.test.com?id=dasdasd
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    if (id) {
        // getPostById(id);
        // getPostList(id);
    }
});

function getPostById(postId) {
    const lang = document.getElementById("current-lang").textContent;
}

function getPostList(exceptId) {
    const lang = document.getElementById("current-lang").textContent;
    const body = {
        "exceptId": exceptId
    }
}

function showPostList(postList) {
    const parent = document.getElementById("similar-post-container-id")
    parent.innerHTML = '';
}