import {getRandomPositiveInteger, creatRandomItem, } from './util.js';

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

const createComments = (commentsId) => {
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
};

const createPost = (postId) => {
  const post = [];

  for (let i = 1; i <= postId; i++) {
    post.push({
      id: i,
      url: `photos/ ${ i } .jpg`,
      discription: creatRandomItem(DISCRIPTIONS),
      likes: getRandomPositiveInteger(15, 200),
      comments: createComments(getRandomPositiveInteger(1, 3)),
    });
  }

  return post;
};

export {createPost, COUNT};
