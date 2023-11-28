/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          title: 'Поменяй текст заголовка вопроса, ирод!',
          question: 'И вопрос тоже поменяй!',
          answer: '1',
          questId: 1,
          locationId: 1,
        },
        {
          title: 'Ну ты ошалел?',
          question: 'И вопрос тот же(',
          answer: '2',
          questId: 1,
          locationId: 1,
        },
        {
          title: 'Еще один типа вопрос?',
          question: 'Ответ 3',
          answer: '3',
          questId: 1,
          locationId: 1,
        },
        {
          title: 'Еще один О_О?',
          question: 'Ответ 1',
          answer: '4',
          questId: 1,
          locationId: 1,
        },
        {
          title: 'ПАМАГИТИ!',
          question: 'Ответ 1',
          answer: '5',
          questId: 1,
          locationId: 1,
        },



        {
          title: 'Прогулка по музею сюрреализма!',
          question: 'Рядом со входом в музей «Дом Бурганова» в Большом Афанасьевском переулке расположена экспозиция «Люди-легенды».В ней установлены бронзовые бюсты перечислите их имена.',
          answer: 'И.А.Бунин, Р.Х.Нуриев, М.Л.Ростропович, А.А.Тарковский.',
          questId: 3,
          locationId: 1,
        },
        {
          title: 'Прогулка по музею сюрреализма!',
          question: 'Какое второе название имеет московский музей «Дом Бурганова»?',
          answer: 'Музей сюрреализма.',
          questId: 3,
          locationId: 2,
        },
        {
          title: 'Прогулка по музею сюрреализма!',
          question: 'Какая скульптура в Малом дворе музея не относится к сюрреализму?',
          answer: 'Бегущая с птицей',
          questId: 3,
          locationId: 1,
        },
        {
          title: 'Прогулка по музею сюрреализма!',
          question: 'На фасаде галереи «Пегас» в первом ярусе установлены три бронзовые женские фигуры – «Обнаженная», «Ожидание», «Скорбящая». Как называется работа в Большом дворе музея, в которой представлены эти же скульптуры, но в меньшем размере?',
          answer: 'Война и мир',
          questId: 3,
          locationId: 1,
        },
        {
          title: 'Прогулка по музею сюрреализма!',
          question: 'Возможно ли изобразить пейзаж в скульптуре? Бурганов сказал: «Да», и сделал скульптуру, вписав пейзаж в женскую фигуру. Как называется эта скульптура, установленная в Большом Дворе?',
          answer: 'Аллегория весны',
          questId: 3,
          locationId: 1,
        },
        {
          title: 'Прогулка по музею сюрреализма!',
          question: 'В Музейном садике установлена скульптура А.Н. Бурганова, в которой присутствует древний христианский символ. По этому символу во II-V веках христиане узнавали друг друга. Укажите название скульптуры.',
          answer: 'Пророк',
          questId: 3,
          locationId: 1,
        },


        {
          title: 'ПАМАГИТИ!',
          question: 'Ответ 1',
          answer: '5',
          questId: 3,
          locationId: 1,
        },
        {
          title: 'Еще один типа вопрос?',
          question: 'Ответ 3',
          answer: '3',
          questId: 3,
          locationId: 1,
        },
        {
          title: 'Еще один О_О?',
          question: 'Ответ 1',
          answer: '4',
          questId: 3,
          locationId: 1,
        },
        {
          title: 'ПАМАГИТИ!',
          question: 'Ответ 1',
          answer: '5',
          questId: 3,
          locationId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
