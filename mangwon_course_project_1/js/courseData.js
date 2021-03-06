// data 형식 객체
// CourseData 배열 - 객체 courseName(코스 이름), courseDistance(코스 거리), coursePath(코스경로), courseInfo(코스 설명)
const CourseData = [
  {
    id: 0,
    courseName: "망원 - 선유도공원",
    courseDistance: "4~5km",
    courseDestination: "선유도공원",
    coursePath: `망원한강공원 → 선유도 → 상수나들목`,
    courseInfo: `망원에서 양화대교를 거쳐 선유도를 들렀다가 상수로 오는 코스다. 사람이 제법 많은 편이다. 
    중간에 양화대교를 올라가야한다. 다리 위에서의 한강과 서울 서쪽의 경관을 즐길 수 있다.`,
  },
  {
    id: 1,
    courseName: "망원 - 홍제천",
    courseDistance: "편도 5km",
    courseDestination: "홍제천",
    coursePath: `망원한강공원 → 홍제천 합수부 → 홍제천 인공폭포`,
    courseInfo: `한강과 홍제천을 같이 둘러볼 수 있는 코스다. 달리기, 걷기를 위한 트랙이 잘 깔려져 있다. 
    한강에서 홍제천으로 갈수록 사람이 적어진다. 도착해서 산과 함께 인공폭포를 보는 묘미가 있다. 초심자라면 도중 돌아오는 것을 추천한다.`,
  },
  {
    id: 2,
    courseName: "경의선 숲길",
    courseDistance: "편도 4~5km",
    courseDestination: "경의선 숲길",
    coursePath: "경의선숲길(연남) → 경의선숲길(홍대) → 경의선숲길(공덕)",
    courseInfo: `연트럴파크라고도 불리는 경의선숲길에서 시작하는 코스다. 옛 경의선 길을 이어 달리며 주변 마포의 경관을 볼 수 있다.
      중간에 횡단보도를 몇개 지나야하므로 안전에 유의해야한다. 사람이 많고, 연남, 홍대 가게들과 가까워 가벼운 산책 후 구경하는 것도 추천한다.`,
  },
  {
    id: 3,
    courseName: "망원 - 당인리발전소 - 상수",
    courseDistance: "3km",
    courseDestination: "당인리발전소",
    coursePath: `망원한강공원 → 절두산순교지 → 당인리 발전소 → 상수나들목`,
    courseInfo: `한강에서 절두산순교지로 들어갈때 높은 계단을 올라야한다. 합정에서 당인리발전소로 이어지는 길에는 여러 아기자기한 카페,
      가게들이 있다. 벚꽃이 피는 시기에는 다른 벚꽃축제 못지 않은 광경을 볼 수 있다.`,
  },

  {
    id: 4,
    courseName: "망원 - 마포대교 왕복",
    courseDistance: "9km",
    courseDestination: "마포대교",
    coursePath: `망원한강공원 → 마포대교 → 망원한강공원`,
    courseInfo: `망원한강공원에서부터 마포대교까지 왕복하는 코스다. 마포구의 한강 길을 거의 다 경험해 볼 수 있다. 망원한강공원에서 양화대교까지는 사람이 많지만 양화대교부터는
      대부분이 운동하러 나온 사람들이라 비교적 한산하다. 상수나들목 즈음에선 밤섬도 볼 수 있고, 건너편으로 국회의사당을 볼 수 있다.`,
  },
  {
    id: 5,
    courseName: "망원 - 가양대교 왕복",
    courseDistance: "9km",
    courseDestination: "가양대교",
    coursePath: `망원한강공원 → 가양대교 → 망원한강공원`,
    courseInfo: `망원한강공원에서 가양대교까지 왕복하는 코스다. 마포대교 왕복코스에 비해 사람이 적다. 하지만 길은 훨씬 넓고 생태공원이 잘 갖춰져 있다. 트랙으로 가도 되지만
      생태공원 흙길로 자연광경을 보며 뛰는 것도 추천한다. 중간에 난지공원, 월드컵공원으로 갈 수 있으며, 가양대교에서 더 올라가면 행주산성으로 갈 수 있다.`,
  },
  {
    id: 6,
    courseName: "마포 한바퀴",
    courseDistance: "10km",
    courseDestination: "홍대, 상수, 망원, 연남",
    coursePath: `망원한강공원 → 상수나들목 → 상수역 → 홍대앞 → 경의선책거리 → 경의선 숲길(연남동) → 홍제천 → 망원한강공원`,
    courseInfo: `한강, 상수, 홍대, 연남, 홍제천 등 여러 곳을 한번에 볼 수 있는 종합코스다.
    사람구경하고 싶고, 홍대 근처의 길들을 알짜배기로 맛보며 달리고 싶은 사람에게 추천한다. 한강, 홍제천, 경의선 숲길은 괜찮지만 상수, 홍대앞에서 횡단보도가 있고, 보도가 좁으므로 안전한 러닝을 요한다. `,
  },
  {
    id: 7,
    courseName: "망원 - 난지도 왕복",
    courseDistance: "10km",
    courseDestination: "난지도",
    coursePath: `망원한강공원 → 월드컵대교 → 난지도(월드컵공원) → 평화의공원(월드컵공원) → 홍제천 → 망원한강공원`,
    courseInfo: `한강과 난지도를 같이 경험할 수 있는 코스이다. 사람이 비교적 적고, 길이 매우 넓은 편이라 지인들과 함께 러닝하기도 좋은 코스다.
      난지도 공원 위로 언덕을 한 700m쯤 올라가면 하늘공원이 있다. 체력이 되거나 처음이라면 코스에 하늘공원을 넣는 것도 추천한다. `,
  },
];

// 질문 배열 - 객체 question(질문 제목), answer1(답변 선택지 1), answer2(답변 선택지 2)

const Question = [
  {
    id: 0,
    img: "./img/icons-difficulty.png",
    question: `러닝 <span>난이도</span>를 선택해주세요`,
    answer: [
      {
        text: `걷고, 뛰면서 천천히 산책하듯 <br> 뛰고 싶어요`,
        value: "beginner",
      },
      {
        text: `왕복코스, 마포 이곳저곳, <br>10km 이내로 길게 뛰고 싶어요`,
        value: "intermediate",
      },
    ],
  },
  {
    id: 1,
    img: "./img/icons-river.png",
    question: `<span>어디</span>를 더 가보고 싶으신가요?`,
    answer: [
      {
        text: `한강 가보고 싶어요. <br>물을 보면서 달리고 싶어요`,
        value: "Hangang",
      },
      {
        text: `내륙쪽으로 가보고 싶어요. <br>거리, 공원에서 달리고 싶어요`,
        value: "inland",
      },
    ],
  },
  {
    id: 2,
    img: "./img/icons-crowd.png",
    question: `달릴 때 주변 <span>혼잡도</span>는 어느정도가 괜찮나요?`,
    answer: [
      {
        text: `사람 구경하면서 달리고 싶어요`,
        value: "loud",
      },
      {
        text: `조용한 환경에서 달리고 싶어요`,
        value: "quiet",
      },
    ],
  },
];
