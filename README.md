# SoSiZi | 소시지 - 소식지 배달 앱

![preview](https://github.com/thinkty/sosizi/blob/main/preview.png?raw=true)

매달 한 번씩 왕십리2동 소식지를 배달할 때 사용하는 웹 앱

## 사용법

아래에서는 다양한 경우의 사용법에 대해 설명합니다.
대부분의 경우, `images` 폴더 또는 `server` 폴더 내부에 있는 `points.json` 파일을 수정하면 됩니다.
어떻게 사용해야하는지 잘 모르겠는 경우, 아래 이메일로 연락주시면 수정해드릴 수도 있고 *안* 해드릴 수도 있습니다. 저도 잘 모르겠습니다.
이메일 : the.thinkty@gmail.com

- 새로운 배달장소 추가하기

새로운 배달장소는 자동차로 배달하면 `carDeliveryPoints` 에 추가하고 걸어서 배달하면 `walkingDeliveryPoints` 에 추가해야합니다.

// 형식
```
  quantity - 소식지 개수,
  id - 통,
  addr - 주소,
  marker - 좌표,
  note - 주석,
  pics - 사진,
  poster - 포스터 배포 여부,
  walk - 걸어서 배달하는지,
```

// 예시
```
  quantity: '200',
  id: '16',
  addr: 'KCC스위첸',
  marker: [37.560572838375, 127.02691284848298],
  note: '입구 쪽 아파트 승강기 앞',
  pics: ['16-1.jpg', '16-2.jpg'],
  poster: true,
  walk: false,
```
잘 모르겠으면 그냥 연락주시면 해결이 될 수도 있고 안 될 수도 있습니다.
일단 연락주세요.

- 새로운 이미지 추가하기

배달 포인트에 새로운 이미지를 추가하려면 `images` 폴더에 추가하려는 이미지 파일을 넣고 (중복 조심), 그 이미지 파일의 이름 (확장자명 포함) 을 `src` 폴더 내부에 있는 `index.html` 파일에서 해당하는 항목의 `pics` 항목에 추가해주면 됩니다.

## 라이선스
MIT

앱에서 사용된 정보들은 왕십리2동 주민센터 (02-2286-7222) 를 통해 받으실 수 있습니다.