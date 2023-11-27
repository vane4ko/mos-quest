/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Locations",
      [
        {
          title: "Дорогая, я перезвоню…",
          shortDescription: 'В баре Дорогая я перезвоню в ТЦ Пятницкий вы можете провести время за общением в компании или просто как следует отдохнуть после рабочего дня...',
          description:
            "В баре Дорогая я перезвоню в ТЦ Пятницкий вы можете провести время за общением в компании или просто как следует отдохнуть после рабочего дня, в чём вам с удовольствием помогут опытные бармены и ассортимент алкоголя! Вам нужно только сообщить крепость и вкус (сладкий или горьковатый). Чтобы ваш бокал не пустовал, бар предлагает большой выбор столовых и десертных вин из различных сортов винограда.",
          adress: "Россия, Москва, Пятницкий переулок, 2, 2 этаж",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d287625.9445857387!2d37.13210528403677!3d55.72240197422492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc1d53c28f%3A0x55364599bda6fbd6!2z0JTQvtGA0L7Qs9Cw0Y8sINGPINC_0LXRgNC10LfQstC-0L3Rji4u!5e0!3m2!1sru!2sru!4v1701004724314!5m2!1sru!2sru",
        },
        {
          title: "Bar Kot Шрёдiнгера",
          shortDescription: 'SHELTER БАР «KOT ШРЁДIНГЕРА» — бар, удививший столицу самыми креативными подачами в городе...',
          description:
            "SHELTER БАР «KOT ШРЁДIНГЕРА» — бар, удививший столицу самыми креативными подачами в городе. Лампа Аладдина, Виселица, Философский камень, Магнум - знакомые названия, за которыми следует самый непредсказуемый эксперимент миксологии. А в интерьере бывшего бомбоубежища хранит столько секретов и загадок, что если хорошо поискать, можно найти дверь в секретный бар ROOM#5. Где барная стойка сделана как летающая тарелка, на стенах – проекция космоса, а земные проблемы уходят на второй план",
          adress: "Россия, г. Москва, Большая Дмитровка, дом 32, стр.1",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.6031082704103!2d37.6100337914909!3d55.765396499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a41403f2e17%3A0x4558e4b9230895d7!2zQmFyIEtvdCDQqNGA0ZHQtGnQvdCz0LXRgNCw!5e0!3m2!1sru!2sru!4v1701005984378!5m2!1sru!2sru",
        },
        {
          title: "Neon Monkey",
          shortDescription: 'Neon Monkey это атмосфера андеграундного тайского бара где-то в самом сердце района Сукхумвит-роуд...',
          description:
            "Neon Monkey это атмосфера андеграундного тайского бара где-то в самом сердце района Сукхумвит-роуд. Воссоздать настроение тайского праздника жизни в центре Москвы получилось без излишних декораций и гипертрофированных тайских элементов. Коктейльная карта удивляет с первого разворота меню не только самым большим выбором шотов, но и фантазией креативной команды барменов. «Веселый молочник», «Леди Бой», «Дети Себастьяна» - малая часть дьявольского экспериенса.А рисовые шарики и креветки-васаби давно стали причиной возвращаться в Neon Monkey не только в пятницу и субботу. Какие-то коктейли подают в хайболах, какие-то — в элегантной посуде на ножке, а некоторые наливают в увесистые керамические стаканы или кружки в форме обезьянок — какая-то очень уместная аллюзия на тики-бар. Классику тут тоже сделают, но идти в неоновый бар, чтобы пить негрони, — какое-то кощунство, а авторские коктейли тут правда хороши. Поэтому самое время перестать снобировать о сложном алкоголе, отпустить себя и почувствовать себя немного в тропиках, попивая коктейль с ромом и банановым ликером ",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.6047783311997!2d37.60886397716498!3d55.765367491022985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b7fa8c89439%3A0xa227a6905471ba63!2sNeon%20Monkey!5e0!3m2!1sru!2sru!4v1701006476166!5m2!1sru!2sru",
          adress: "Россия, г. Москва, Большая Дмитровка, дом 32, стр.2",
        },
        {
          title: "KOSMOХОМЯК", 
          shortDescription: 'Бар, в котором Вы можете попасть из прошлого в будущее...',
          description:
            "БАР, В КОТОРОМ МОЖНО ПОПАСТЬ ИЗ ПРОШЛОГО В БУДУЩЕЕ *ЕСЛИ ВЫ МЕЧТАЕТЕ СТАТЬ ПУТЕШЕСТВЕННИКОМ ВО ВРЕМЕНИ, НЕ ОБЯЗАТЕЛЬНО УГЛУБЛЯТЬСЯ В ДЕБРИ ФИЗИКИ: «КОSMOХОМЯК» — ТАИНСТВЕННЫЙ ПОРТАЛ В БУДУЩЕЕ В САМОМ ЦЕНТРЕ МОСКВЫ. ОНИ КОЛОНИЗИРОВАЛИ НЕИЗВЕСТНУЮ ПЛАНЕТУ И ВЗЯЛИ С СОБОЙ КОКТЕЙЛИ ИЗ ПРОШЛОГО. НО БУДУЩЕЕ УЖЕ ЗДЕСЬ, ПОЭТОМУ ПРИШЛОСЬ ПРИДУМАТЬ НОВЫЕ.. ФУТУРИСТИЧЕСКИЕ И ЯРКИЕ ВКУСЫ ЗАПОМНЯТСЯ ВАМ И НЕ ОСТАВЯТ РАВНОДУШНЫМИ.",
          adress: "Россия, г. Москва, Большая Дмитровка, дом 32, стр.2",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71684.44687212796!2d37.6044142029958!3d55.84290306642336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b3a3be7b5bf%3A0x56c682cd05c578b4!2zS29zbW_RhdC-0LzRj9C6!5e0!3m2!1sru!2sru!4v1701007078551!5m2!1sru!2sru",
        },
        {
          title: "Моя пьяная бабушка летит в Сингарпур",
          shortDescription: '«Моя пьяная бабушка летит в Сингарпур» – проект про внутреннюю свободу и отказ от ограничений.',
          description:
            "«Моя пьяная бабушка летит в Сингарпур» – проект про внутреннюю свободу и отказ от ограничений. Для азиатского бара был выбран формат изакая в исконном своем воплощении – демократичный, открытый и максимально комфортный для всех. На первом этаже, отсылающем антуражем к современной Азии, представлен стритфуд. Здесь действует сценарий «пришел, выпил, закусил». Быстро и с чувством эстетики, потому что за баром наливают 15 видов авторских шотов от бренд-бармена холдинга Андрея Корнилова и отдают 21 вид дим-самов – легкой закуски из тонкого теста и начинки. Все шоты – про яркость азиатских вкусов и легкое сумасшествие. «Леди бой» с клубничным сиропом или «Белое золото» с кокосовой сгущенкой – на роме. «Крейзи Сингапур» с черной смородиной и фиалкой или бабушкин любимчик «Стен Ли» с киви и базиликом – на джине",
          adress: "Россия, г. Москва, ул. Большая Никитская, дом 14",
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4489.771193548158!2d37.606309649971166!3d55.760489528976386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bb0549f0a21%3A0x61da3c9646bac10d!2z0JzQvtGPINGA0YzRj25heWEgYmFiedGI0LrQsCDQu9C10YLQuNGCINCyIGNpbtCz0LDQv9GD0YA!5e0!3m2!1sru!2sru!4v1701007575781!5m2!1sru!2sru',
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
