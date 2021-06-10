"use strict"

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }

}

let post1 = new Post("Эрнест Хемингуэй", "Айда на Первую Мировую ", "1918 ")

let post2 = new AttachedPost("Эрнест Хемингуэй", "Айда на 'Гражданку' в Испании", "1937 ")

post2.makeTextHighlighted()
post2.edit("Айда топить подлодки фашистов")
console.log(post2.text)