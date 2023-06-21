## Hướng dẫn cài đặt

1. Clone dự án

```bash
git clone git@github.com:Minh-19102/cheemlendar.git
```

2. Chạy môi trường phát triển

- Vào thư mục dự án

```bash
cd cheemlendar
```

- Tải các package cần thiết

```bash
npm install
```

- Cấu hình API

```bash
cd api
npm install
```

- Seeding data:

  - Mở XAMPP chạy MySQL database port 3306
  - Chạy script

```bash
npm run create_db
```

- Chạy server

```bash
cd ..
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Vào web
   Link [http://localhost:3000](http://localhost:3000)

Note: Tài khoản được lưu trong file [account.json](./public/accounts/account.json)
