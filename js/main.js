function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomPositiveInteger();

function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength();

const COUNT = 25;
const DISCRIPTIONS = [
  'Красивые котики',
  'Неугомонный малыш',
  'Пухляш',
  'Молодая семейка',
  'Хоба'
];
const MESSAGES = [
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Всё отлично!',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const USER_NAMES = [
  'Алекс',
  'Василий',
  'Антон',
  'Снежана',
  'Юля',
  'Игорь',
  'Никита',
  'Олег',
  'Анастасия',
  'Потап',
];

function creatRandomItem (arr) {
  return arr([getRandomPositiveInteger(0, arr.length - 1)]);
}

function createComments (commentsId) {
  const comment = [];

  for (let i = 1; i <= commentsId; i++) {
    comment.push({
      id: i,
      avatar: `img/avatar- ${  [getRandomPositiveInteger(1, 6)]  } .svg`,
      message: creatRandomItem(MESSAGES),
      name: creatRandomItem(USER_NAMES),
    });
  }

  return comment;
}

function createPost (postId) {
  const post = [];

  for (let i = 1; i <= postId; i++) {
    post.push({
      id: i,
      url: `photos/ ${ i } .jpg`,
      discription: creatRandomItem(DISCRIPTIONS),
      likes: getRandomPositiveInteger(15, 200),
      comments: createComments(getRandomPositiveInteger(2, 10)),
    });
  }

  return post;
}


