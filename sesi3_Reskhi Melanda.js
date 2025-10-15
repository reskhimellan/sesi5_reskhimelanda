let i = 4;                        // tinggi segitiga
for (let i = 1; i <= 4; i++) {    // loop baris
  let segitiga = "";              // kosongkan baris 
  for (let j = 1; j <= i; j++) {  // loop kolom
   segitiga += "*";               // tambahkan bintang
  }
  console.log(segitiga);          
}
