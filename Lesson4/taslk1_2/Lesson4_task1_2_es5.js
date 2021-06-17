"use strict"

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let post1 = new Post("Эрнест Хемингуэй", "Айда на Первую Мировую ", "1918 ")

let post2 = new AttachedPost("Эрнест Хемингуэй", "Айда на 'Гражданку' в Испании", "1937 ")

post2.makeTextHighlighted()
post2.edit("Айда топить подлодки фашистов")
console.log(post2.text)
