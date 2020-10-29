# Ini adalah template untuk Web KP

## Intro

### Tujuan

Template ini dibuat untuk menyamakan semua web KP jaringan. Web dengan teknologi yang sama akan mudah diintegrasikan menjadi satu kesatuan.

### Teknologi

Web ini terdiri dari backend dan frontend. Sisi backend berjalan diserver untuk mengelola data dan database. Sisi frontend merupakan bagian tampilan. Berikut teknologi yang digunakan:

**Backend**

- Express (framework server populer di node.js) (referensi: [1](https://expressjs.com/), [2](https://sekolahkoding.com/kelas/tutorial-nodejs-dan-expressjs/video/belajar-express-js), [3](http://mfikri.com/artikel/tutorial-nodejs), [4](https://code.tutsplus.com/id/tutorials/build-a-complete-mvc-website-with-expressjs--net-34168), [5](https://idjs.github.io/belajar-nodejs/expressjs/index.html), [6](https://medium.com/easyread/nodejs-series-pengenalan-expressjs-dan-instalasi-expressjs-5fda39b9ea58) )
- Sequelize (ORM untuk memudahkan akses ke database) (referensi: [1](https://sequelize.org/master/), [2](https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize),
  [3](https://medium.com/skyshidigital/membuat-restful-api-menggunakan-express-dan-sequelize-ef0e10da36ff), [4](https://medium.com/hookigroup/simple-rest-api-dengan-express-sequelize-dan-mysql-part-i-eefcf2ec1f5c), [5](https://bezkoder.com/node-js-express-sequelize-mysql/), [6](http://immanuelbayu.my.id/tutorial-sequelize-orm-dengan-nodejs/), [ORM](https://medium.com/wripolinema/sudah-kenal-sama-orm-34712e85c6fa))

**Frontend**

- EJS (templating html)
- Tailwind CSS (utilitas/framework CSS)

## Penggunaan

### Requirement

Untuk menjalankan webserver ini butuh diinstall software berikut:

- Node.js (Untuk menjalankan javascript, install dari [sini](https://nodejs.org/en/download/))
- XAMPP (Sebuah paketan webserver, juga mengandung mysql dan phpmyadmin, install dari [sini](https://www.apachefriends.org/index.html) )
- Git (Code versioning, memudahkan untuk mengelola kode program, install dari [sini](https://git-scm.com/))

### Instalasi

Jalankan semua perintah berikut dari terminal/command line(cmd).

1. Clone kode program ini dari github

```
git clone https://github.com/anan474/kp_template.git
```

2. Masuk ke foldernya

```
cd kp_template
```

3. Install paket yang diperlukan

```
npm install
```

4. Sesuaikan variabel db
