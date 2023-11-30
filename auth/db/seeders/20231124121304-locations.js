/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Locations',
      [
        {
          title: 'Дорогая, я перезвоню…',
          shortDescription:
            'В баре Дорогая я перезвоню в ТЦ Пятницкий вы можете провести время за общением в компании или просто как следует отдохнуть после рабочего дня...',
          description:
            'В баре Дорогая я перезвоню в ТЦ Пятницкий вы можете провести время за общением в компании или просто как следует отдохнуть после рабочего дня, в чём вам с удовольствием помогут опытные бармены и ассортимент алкоголя! Вам нужно только сообщить крепость и вкус (сладкий или горьковатый). Чтобы ваш бокал не пустовал, бар предлагает большой выбор столовых и десертных вин из различных сортов винограда.',
          adress: 'Россия, Москва, Пятницкий переулок, 2, 2 этаж',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d287625.9445857387!2d37.13210528403677!3d55.72240197422492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc1d53c28f%3A0x55364599bda6fbd6!2z0JTQvtGA0L7Qs9Cw0Y8sINGPINC_0LXRgNC10LfQstC-0L3Rji4u!5e0!3m2!1sru!2sru!4v1701004724314!5m2!1sru!2sru',
          type: 1,
        },
        {
          title: 'Bar Kot Шрёдiнгера',
          shortDescription:
            'SHELTER БАР «KOT ШРЁДIНГЕРА» — бар, удививший столицу самыми креативными подачами в городе...',
          description:
            'SHELTER БАР «KOT ШРЁДIНГЕРА» — бар, удививший столицу самыми креативными подачами в городе. Лампа Аладдина, Виселица, Философский камень, Магнум - знакомые названия, за которыми следует самый непредсказуемый эксперимент миксологии. А в интерьере бывшего бомбоубежища хранит столько секретов и загадок, что если хорошо поискать, можно найти дверь в секретный бар ROOM#5. Где барная стойка сделана как летающая тарелка, на стенах – проекция космоса, а земные проблемы уходят на второй план',
          adress: 'Россия, г. Москва, Большая Дмитровка, дом 32, стр.1',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.6031082704103!2d37.6100337914909!3d55.765396499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a41403f2e17%3A0x4558e4b9230895d7!2zQmFyIEtvdCDQqNGA0ZHQtGnQvdCz0LXRgNCw!5e0!3m2!1sru!2sru!4v1701005984378!5m2!1sru!2sru',
          type: 1,
        },
        {
          title: 'Neon Monkey',
          shortDescription:
            'Neon Monkey это атмосфера андеграундного тайского бара где-то в самом сердце района Сукхумвит-роуд...',
          description:
            'Neon Monkey это атмосфера андеграундного тайского бара где-то в самом сердце района Сукхумвит-роуд. Воссоздать настроение тайского праздника жизни в центре Москвы получилось без излишних декораций и гипертрофированных тайских элементов. Коктейльная карта удивляет с первого разворота меню не только самым большим выбором шотов, но и фантазией креативной команды барменов. «Веселый молочник», «Леди Бой», «Дети Себастьяна» - малая часть дьявольского экспериенса.А рисовые шарики и креветки-васаби давно стали причиной возвращаться в Neon Monkey не только в пятницу и субботу. Какие-то коктейли подают в хайболах, какие-то — в элегантной посуде на ножке, а некоторые наливают в увесистые керамические стаканы или кружки в форме обезьянок — какая-то очень уместная аллюзия на тики-бар. Классику тут тоже сделают, но идти в неоновый бар, чтобы пить негрони, — какое-то кощунство, а авторские коктейли тут правда хороши. Поэтому самое время перестать снобировать о сложном алкоголе, отпустить себя и почувствовать себя немного в тропиках, попивая коктейль с ромом и банановым ликером ',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.6047783311997!2d37.60886397716498!3d55.765367491022985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b7fa8c89439%3A0xa227a6905471ba63!2sNeon%20Monkey!5e0!3m2!1sru!2sru!4v1701006476166!5m2!1sru!2sru',
          adress: 'Россия, г. Москва, Большая Дмитровка, дом 32, стр.2',
          type: 1,
        },
        {
          title: 'KOSMOХОМЯК',
          shortDescription:
            'Бар, в котором Вы можете попасть из прошлого в будущее...',
          description:
            'БАР, В КОТОРОМ МОЖНО ПОПАСТЬ ИЗ ПРОШЛОГО В БУДУЩЕЕ *ЕСЛИ ВЫ МЕЧТАЕТЕ СТАТЬ ПУТЕШЕСТВЕННИКОМ ВО ВРЕМЕНИ, НЕ ОБЯЗАТЕЛЬНО УГЛУБЛЯТЬСЯ В ДЕБРИ ФИЗИКИ: «КОSMOХОМЯК» — ТАИНСТВЕННЫЙ ПОРТАЛ В БУДУЩЕЕ В САМОМ ЦЕНТРЕ МОСКВЫ. ОНИ КОЛОНИЗИРОВАЛИ НЕИЗВЕСТНУЮ ПЛАНЕТУ И ВЗЯЛИ С СОБОЙ КОКТЕЙЛИ ИЗ ПРОШЛОГО. НО БУДУЩЕЕ УЖЕ ЗДЕСЬ, ПОЭТОМУ ПРИШЛОСЬ ПРИДУМАТЬ НОВЫЕ.. ФУТУРИСТИЧЕСКИЕ И ЯРКИЕ ВКУСЫ ЗАПОМНЯТСЯ ВАМ И НЕ ОСТАВЯТ РАВНОДУШНЫМИ.',
          adress: 'Россия, г. Москва, Большая Дмитровка, дом 32, стр.2',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71684.44687212796!2d37.6044142029958!3d55.84290306642336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b3a3be7b5bf%3A0x56c682cd05c578b4!2zS29zbW_RhdC-0LzRj9C6!5e0!3m2!1sru!2sru!4v1701007078551!5m2!1sru!2sru',
          type: 1,
        },
        {
          title: 'Моя пьяная бабушка летит в Сингарпур',
          shortDescription:
            '«Моя пьяная бабушка летит в Сингарпур» – проект про внутреннюю свободу и отказ от ограничений.',
          description:
            '«Моя пьяная бабушка летит в Сингарпур» – проект про внутреннюю свободу и отказ от ограничений. Для азиатского бара был выбран формат изакая в исконном своем воплощении – демократичный, открытый и максимально комфортный для всех. На первом этаже, отсылающем антуражем к современной Азии, представлен стритфуд. Здесь действует сценарий «пришел, выпил, закусил». Быстро и с чувством эстетики, потому что за баром наливают 15 видов авторских шотов от бренд-бармена холдинга Андрея Корнилова и отдают 21 вид дим-самов – легкой закуски из тонкого теста и начинки. Все шоты – про яркость азиатских вкусов и легкое сумасшествие. «Леди бой» с клубничным сиропом или «Белое золото» с кокосовой сгущенкой – на роме. «Крейзи Сингапур» с черной смородиной и фиалкой или бабушкин любимчик «Стен Ли» с киви и базиликом – на джине',
          adress: 'Россия, г. Москва, ул. Большая Никитская, дом 14',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4489.771193548158!2d37.606309649971166!3d55.760489528976386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bb0549f0a21%3A0x61da3c9646bac10d!2z0JzQvtGPINGA0YzRj25heWEgYmFiedGI0LrQsCDQu9C10YLQuNGCINCyIGNpbtCz0LDQv9GD0YA!5e0!3m2!1sru!2sru!4v1701007575781!5m2!1sru!2sru',
          type: 1,
        },

        {
          title: 'Музей Сюрреализма',
          shortDescription:
            'Музей представляет творчество выдающегося русского скульптора Александра Николаевича Бурганова. Это художник с мировым именем. Его произведения украшают площади городов Европы, Америки, Азии и хранятся в коллекциях крупнейших музеев.',
          description:
            'Особое архитектурно-художественное пространство, спроектированное и созданное самим скульптором и особая сценография пространства привлекают и удивляют посетителей музея. Здесь находится не только экспозиция работ Бурганова, но и мастерская, творческий процесс в которой продолжается. Она раскрывает романтический мир современного художника, атмосферу рождения художественного произведения. Здесь представлены произведения Александра Бурганова, работы его друзей и учеников. В экспонируемых личных коллекциях художника — искусство античной классики, русская средневековая скульптура и народное творчество, искусство Западной Европы и Африки, уникальные книги и гравюры — все то, что составляет мир художника, который он создает вокруг себя',
          adress:
            'Москва, 119019, Большой Афанасьевский переулок, дом 15, стр. 9',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17778.914519536767!2d37.58635097263202!3d55.7482281135734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bad7baead53%3A0x23b56ad73c5d9abb!2z0JTQvtC8INCR0YPRgNCz0LDQvdC-0LLQsCDQnNC-0YHQutC-0LLRgdC60LjQuSDQk9C-0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0JzRg9C30LXQuQ!5e0!3m2!1sru!2sus!4v1701241253335!5m2!1sru!2sus',
          type: 3,
        },
        {
          title: 'Moscow Python Conf',
          shortDescription:
            'Конференция пройдет на площадке международного форума по практической безопасности Positive Hack Days.',
          description:
            'Moscow Python Conf  — профессиональная конференция для Python-разработчиков middle и senior-уровня. Мы собираем более 500 Python-программистов России, представим самые интересные доклады из мира python-разработки и конечно же, создадим комфортную и благоприятную среду для нетворкинга в лучших традициях конференций Онтико, cообщества Moscow Python. Конференция пройдет на площадке международного форума по практической безопасности Positive Hack Days (организатор Positive Technologies).',
          adress: 'Москва, Парк им. М.Горькогo',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35929.470299196095!2d37.56553804633067!3d55.74821953520842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b08f8fdcbc3%3A0x4375cd8bcd701ff0!2z0KbQtdC90YLRgNCw0LvRjNC90YvQuSDQv9Cw0YDQuiDQutGD0LvRjNGC0YPRgNGLINC4INC-0YLQtNGL0YXQsCDQuNC8LiDQnC7Qk9C-0YDRjNC60L7Qs28!5e0!3m2!1sru!2sus!4v1701241548619!5m2!1sru!2sus',
          type: 2,
        },
        {
          title: 'GEEK PICNIC',
          shortDescription:
            'Open air на Острове Мечты (Южный Ландшафтный Парк), где снова соберутся московские стартапы и ученые, музыканты и дизайнеры, студенты IT направлений и фрилансеры, чтобы стать частью главной технологической сети страны!',
          description:
            'Удивлять и вдохновлять. Влюблять каждого в удивительный мир технологий и науки. Совместно с партнерами и участниками мы строим глобальный фестиваль будущего, который привлекает активных горожан и гостей со всего мира.',
          adress: 'просп. Мира, 119',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5042.102227998858!2d37.6257823267007!3d55.83113365722968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b536656bc30f5d%3A0x304f98fd96b49050!2z0JLQstGGLCDQv9GALdGCINCc0LjRgNCwLCAxMTksINCh0LXQstC10YDQvi3QktC-0YHRgtC-0YfQvdGL0Lkg0JDQtNC80LjQvdC40YHRgtGA0LDRgtC40LLQvdGL0Lkg0J7QutGA0YPQsywg0KDQvtGB0YHQuNGPLCAxMjkyMjM!5e0!3m2!1sru!2sus!4v1701241603661!5m2!1sru!2sus',
          type: 2,
        },
        {
          title: 'ARTPLAY',
          shortDescription:
            'ARTPLAY - место силы творческих людей, кто злюбит современное искусство и живо интересуется современными тенденциями дизайна.',
          description:
            'Центр дизайна Artplay — креативный кластер в Москве. Создан в 2003 году, с 2008 года располагается на территории бывшей промзоны в районе Курского вокзала.',
          adress: 'Нижняя Сыромятническая, 10',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.335136416695!2d37.66391379132552!3d55.752680203683894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54ba6a2dbea5d%3A0x6b8d20281306254a!2sArtplay!5e0!3m2!1sru!2sus!4v1701242278110!5m2!1sru!2sus',
          type: 2,
        },
        {
          title: 'Tokkpokki',
          shortDescription:
            "Модное k-pop кафе и бар 'Tokpokki' в центре Москвы🫰🏻🇰🇷",
          description:
            'Основатели Tokpokki Владимир Ким(г.Москва) и Александр Пак(г.Сеул) решили создать атмосферное место, где каждый поклонник кпоп и дорам может ощутить себя в Ночном Сеуле не выезжая за пределы России!Большое значение уделяется свежести и качества блюд, аутентичности, вкусу и размеру блюд! Также у нас уникальное сочетание атмосферы кафе с лучшим DJ и резидентом клуба Tokpokki Артем Ким. Под его танцевальные и самые последние треки плейлиста никто не может устоять! Вечеринки проходят по пятницам и субботам! Рекомендуем заранее бронировать по ссылке',
          adress: 'ул. Новослободская д.26,с.1 ',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71794.56791632713!2d37.4455690383911!3d55.78316172956507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b8a49753909%3A0x5fe23d1d7b9d8ecb!2z0JrQn9Ce0J8g0JrQsNGE0LUg0KLQvtC60L_QvtC60LrQuA!5e0!3m2!1sru!2sus!4v1701242552268!5m2!1sru!2sus',
          type: 2,
        },
        {
          title: 'ComicCon Russia',
          shortDescription:
            'Comic Con Russia — это настоящий праздник для всех поклонников поп-культуры.',
          description:
            'ВСЁ ЛУЧШЕЕ ИЗ МИРА РАЗВЛЕЧЕНИЙ  Здесь вы увидите главные премьеры из мира фильмов, сериалов, компьютерных и настольных игр, развлекательной литературы, и, конечно же, популярных комиксов, аниме и манга. Встретите звёзд отечественного и мирового кинематографа, получите возможность сфотографироваться с ними и взять автограф. Это яркое шоу для всех, кому не чужда современная поп-культура в любых ее проявлениях!',
          adress: 'МКАД, 65, Москва, Московская обл.',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.1285732263377!2d37.38524339135759!3d55.8257276037809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5463b1330ff61%3A0x3bda78a203d7840f!2z0JrRgNC-0LrRg9GBINCh0LjRgtC4INCl0L7Qu9C7!5e0!3m2!1sru!2sus!4v1701242606640!5m2!1sru!2sus',
          type: 2,
        },
        {
          title: 'AnyFurry Fest IV',
          shortDescription:
            'Фурри-фестиваль, на котором мы соберем всех пушистых. Что у нас будет? Конечно же, художники и ярмарка. А еще конкурс фурсьютов, фотозона, настольные ролевые игры, всякое интересное на сцене и многое другое.',
          description:
            'Полный список развлечений:• Фурсьют-дефиле, где будет больше сотни участников,• Кинопоказ самых ламповых мультфильмов про животных,• Большой маркет с классными художниками и крафтерами,• Зона рисования на графических планшетах и бумаге, с карандашами и фломастерами,• Фотозона,• Игротека от Мосигры, бесплатные настольные ролевые и VR-игры,• Мастер-классы и лекции в отдельном зале,• Викторины, розыгрыши и конкурсы на сцене! А для обладателей VIP-билетов «FurSnow» и выше список ещё больше: • Крутой мерч: значок, брелок, фурбук, бейдж, магнит, стикерпак и кружка — и это только в самом маленьком VIP-наборе! • VIP-зона с шоколадным фонтаном, креслами-мешками, фруктами и печеньками!',
          adress: 'ул. Никулинская д2, к1., Москва, ул. Никулинская д2, к1.',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.1382304538397!2d37.45294117681361!3d55.66919637305334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54d963acf2eb1%3A0x94f5dd79a6ac3a02!2z0J3QuNC60YPQu9C40L3RgdC60LDRjyDRg9C7Liwg0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1701263365714!5m2!1sru!2sru',
          type: 2,
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