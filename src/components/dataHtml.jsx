const htmlList = [
 {
    soru: "1- HTML Açlımı nedir ?",

    cevap:{
            a: ["Hyper Text Man Large" , false],
            b: ["Hiper Told Many Long", false],
            c: ["Hyper Text Markup Language",  true],
            d: ["Hiper Take Markup Length", false]
    }
    
 },
 {
    soru: "2- Hangi Etiket daha büyüktür ?",

    cevap: {
        a: ["h1", true],
        b: ["h2", false],
        c: ["h3", false],
        d: ["h4", false],

    }
 },
 {
    soru: "3- HTML etiketlerinin hireyarşik yapısı sırasıyla nedir ?",

    cevap: {
        a: ["HTML -> Head -> Body", true],
        b:[ "HTML -> Body -> Head", false],
        c: ["Body -> HTML -> Head", false],
        d: ["Head -> Body -> HTML", false]
    }
 },
 {
    soru: "4- Aşağıdakilerden hangisi Blok Türündeki Elementlerden biri değildir ?",
     
    cevap: {
        a: ["span", true],
        b: ["from", false],
        c: ["footer", false],
        d: ["Atak helikopteri :)", false],
    }

 },
 {
     soru: "5- Html’de bir alt satıra geçmek için hangi html etiketi kullanılır ?",

     cevap: {
        a: ["<br>", true],
        b: ["<lb>", false],
        c: ["break", false],
        d: ["newline", false]
    }
 },
 {
    soru: "6- Sırasız bir liste (unordered list) oluşturmak için hangi etiketi kullanmalısınız?",
    cevap: {
        a: ["<ul>", true],
        b: ["<ol>", false],
        c: ["<li>", false],
        d: ["<list>", false]
    }
 },
 {
    soru: "7- Kullanıcıdan metin girişi almak için kullanılan HTML etiketi nedir?",

    cevap: {
        a: ["input", true],
        b: ["textinput", false],
        c: ["textbox", false],
        d: ["formtext", false]
    },

 },
 {
    soru: " 8-Bir resmi sayfaya eklemek için hangi HTML etiketi kullanılır?",
    cevap: {
        a: ["<img>", true],
        b: ["picture", false],
        c: ["<image", false],
        d: ["<src>", false]
    }
 },
 {
    soru: "9- Kullanıcının bir şifre girmesini sağlamak için kullanılan HTML etiketi nedir?",

    cevap: {
        a:["<password>", false],
        b: ["<secure>", false],
        c: ["<input type=password >", true],
        d:["pass", false,]
    }
 }
 
]

export default htmlList;