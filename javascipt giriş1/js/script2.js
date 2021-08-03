/**
 * String Birleştirme işlemi
 */

var name = "Ahmet";
var lastName= "Uygar";

 var fullName = name + ' ' + lastName;
// console.log(fullName);

// fullName = "Ahmet";
// fullName += " " + lastName;
// console.log(fullName);



// var fullName= name.concat("-", lastName, " sercan");
// console.log(fullName);


// var welcomeMessage= "Sayın " + name + " " + lastName + "'ın kaydınız başarıyla oluşturulmuştur";
// var welcomeMessage2= 'Sayın ' + name + ' ' + lastName + '\'ın , kaydınız başarıyla oluşturulmuştur';


// console.log(welcomeMessage);
// console.log(welcomeMessage2);

/**
 * String Lenth - Toplam Karakter Sayısı
 
 */

// console.log(name +  " " + name.length+ " karakterden oluşmaktadır");

/**
 * Tüm Harflerin Büyük
 * Tüm harflerin küçük
 */
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());


/**
 * String Search - Arama İşlemleri
 */

// var search= name.indexOf("m");
/**
 * Sıfırdan başlayarak kaçıncı sıradaysa onu döner
 * Bulamazsa -1 döner.
 * Büyük harf küçük harf duyarlıdır.
 * Kaçıncı karakter sırasında bekliyorsak o sırada arama yapabiliriz.
 */

// console.log(search);
// console.log(name);

// search = name.lasIndexOf("m");
// console.log(search);

// search = fullName.startsWith("Ahmet");
// Bulursa true yada false değeri döderir.
// console.log(search);

// console.log(fullName);
// console.log(fullName.italics());
// console.log(fullName.bold());
// console.log(fullName.fontsize(30));
// console.log(fullName.fontcolor("red"));
// console.log(fullName.link("https://xzensoft.com/"));


/**
 * Değiştirme / Replace
 */
// console.log("Full Name: " + fullName);
// console.log(fullName.replace(" ", " - "));

/**
 * Sıradan Giden Textleri Bölme - Split
 */
// var color = "red-blue-green-white-black";

// var result= color.split("-");
// var result2= color.split("-", 2);
// console.log(color);
// console.log(result);
// console.log(result2);


/**
 * Trin Boşlukları Almak
 */
// var text1 = " Developer ";
// var text2 = "-"
// console.log(text2 + text1 + text2);
// var leftTrim = text2 + text1.trimLeft() + text2;
// console.log(leftTrim);
// var rightTrim = text2 + text1.trimRight() + text2;
// console.log(rightTrim);
// var fullTrim = text2 + text1.trim() + text2;
// console.log(fullTrim);


// var startTrim = text2 + text1.trimStart() + text2;
// console.log(startTrim);
// var endTrim = text2 + text1.trimEnd() + text2;
// console.log(endTrim);

/**
 * Substring SLice
 */

var search= name.substring(3, 1);
// Aralık belirtir
// İlk girilen rakam ikincisinden büyükse kendisi yerini değiştirir.
// console.log(name);
// console.log(search);

// search= name.slice(3, 1);
// Aralık belirtilir.
// İlk girilen rakam ikincsinden büyükse boş veri döndürür.
// console.log(search);

/**
 * substr
 */
console.log(name);
var search= name.substr(0, 4);
console.log(search);




