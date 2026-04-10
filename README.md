## Hướng dẫn cài đặt

Clone repo bằng cách chạy command sau trong Terminal `git clone https://github.com/hphungg/viettel-leaderboard.git`

Cài đặt [NodeJS 24](https://nodejs.org/en/download) với hệ điều hành phù hợp, đảm bảo cài đặt xong các command của NodeJS hoạt động bình thường.

Sau khi clone repo và cài đặt NodeJS thành công, truy cập vào folder codebase vừa clone xong và chạy command bên dưới để cài đặt các thư viện thành phần cần thiết cho dự án.

```bash
npm i
```

Sau khi lệnh phía trên chạy xong, để run web lần lượt chạy 2 command sau:

```bash
npm run build

npm run start
```

Mở đường dẫn [http://localhost:3000](http://localhost:3000) trong trình duyệt web để xem web Leaderboard.
