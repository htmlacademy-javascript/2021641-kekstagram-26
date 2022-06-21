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
const NAMES = [
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
function createComment () {
  const comment = () => ({
    id: getRandomPositiveInteger(30, 180),
    avatar: `img/avatar- ${  [getRandomPositiveInteger(1, 6)]  } .svg`,
    message: MESSAGES[getRandomPositiveInteger(0, 2)],
    name: NAMES[getRandomPositiveInteger(0, 10)],
  });

  return Array.from({length: COUNT}, comment);
}
function createPhoto (id) {
  const comments = [];
  const commentsCount = getRandomPositiveInteger(30, 180);
  const ids = [];
  for (let i = 1; i <= commentsCount; i++) {
    if (i === 1) {
      const r = getRandomPositiveInteger(30, 180);
      comments.push(createComment(r));
      ids.push(r);
    } else {
      let r;
      while(true) {
        r = getRandomPositiveInteger(30, 180);
        if (!ids.some(el => el === r)) {
          ids.push(r);
          break;
        }
      }
      comments.push(createComment(r));
    }
  }
  return {
    id,
    url: `photos/ ${  id  } .jpg`,
    likes: getRandomPositiveInteger(1, MESSAGES.length),
    discription: DISCRIPTIONS[getRandomPositiveInteger(1, DISCRIPTIONS.length - 1)],
    comments: createComment(),
  };
}
function  createPhotos (count) {
  const photos = [];
  for (let i = 1; i <= count; i++) {
    photos.push(createPhoto(i));
  }

  return photos;
}
const photos = createPhotos(25);
const creatUserComments = Array.from({length: COUNT}, createPhoto);

