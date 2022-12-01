# user-API

## Directory Structure
```
.
├── app.js
├── routes
│   ├── index.js
│   └── users.js
└── schemas
    ├── index.js
    └── user.js
```
---
- 회원 목록 DB는 다음과 같이 설계되어있어요.
- 테이블명 : User
    - _id (Object Id) : 회원 번호 (몽고디비 인덱스)
    - name (String) : 회원 이름
    - ID (String) : 회원 아이디
    - pw (String) : 회원 비밀번호

![image](https://user-images.githubusercontent.com/61128538/204947709-01c78b59-2cd7-43c3-99f4-09422b7b4456.png)

- 구현해야하는 API는 두개입니다.
- 회원의 전체 목록을 조회하는 API
- 한 회원의 userId를 주었을때 회원 정보를 조회하는 API

![image](https://user-images.githubusercontent.com/61128538/204947830-11ffbbf2-e284-4d6d-b29d-4ab38e73c476.png)


