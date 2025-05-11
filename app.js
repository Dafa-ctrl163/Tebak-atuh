// Study casus membuat game tebak tebakan 

let maximum = parseInt(prompt('Masukan nilai maximal')) // membuat variable maximal, dimana variable ini akan menyimpan nilai yang kita definisikan,untuk batas nilai untuk di tebak

while(!maximum) { // jika nilai dari maximum 0 , tidak ada, atau tidak di input sama sekali,
    maximum = parseInt(prompt('masukan nilai maximal!')); // maka kita akan memaksa untuk memasukan nilai maximal nya.
}

// Dan ketika kita sudah menginputkan nilai, Di sini ada variable  targetNum, targetNum ini adalah angka yang harus kita tebak
const targetNum = Math.floor(Math.random() * maximum) + 1; // nilai nya akan di generate oleh math.random() di kali nilai maximalnya, 
                                                        // ada kemungkinan juga angka nya akan menjadi float, maka akan menjadi bulau dengan menggunakkan math.floor()
console.log(targetNum); // untuk contekan

let guess = parseInt(prompt('Isi tebakan pertama kamu!')); // kita membuat inputan, untuk menebaknya
let attempts = 1;

while (parseInt(guess) !== targetNum) { // kalau misalkan nilai yang kita tebak ini, itu belum sama dengan targetNum, maka di bawah akan dicek
    attempts++;
    
    if (guess > targetNum){ // kalau nilai nya terlalu tinggi
        guess = parseInt(prompt('Terlalu tinggi! tebak lagi :')); // output
    } else { // kalau terlalu rendah
        guess = parseInt(prompt('terlalu rendah! tebak lagi')); // ouput
    }
}

alert(`Selamat tebakan kamu benar!! dengan percobaan ${attempts} kali`); // output jika tebakan benar