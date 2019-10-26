import React, { Component } from "react";

import Title from "../Title";
import Form from "../Fotm";
import List from "../List";

class News extends Component {
  constructor() {
    super();
    this.state = {
      isShowForm: false,
      newsList: [],
      rm: true
    };
    this.createItem = this.createItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }
  componentWillMount() {
    const newsListTemplate = [
      {
        id: 1,
        news_title: "Три поросенка",
        text:
          "Английская народная сказка про трех персонажей с пятачками - Ниф-Нифа, Нуф-Нуфа и Наф-Нафа. Сергей Михалков написал по ней пьесу. Краткое содержание: наступает зима, поросята строят домики. Один - из соломы, другой - из веток. И лишь мудрый Наф-Наф возвел дом из камня, став таким образом прародителем современного коттеджного строительства. В прочном домике укрылись оба брата Наф-Нафа, дав таким образом каменный отпор злодею-волку, который с тех пор зарекся есть свинину."
      },
      {
        id: 2,
        news_title: "Кабанчик Пумба",
        text:
          'Главный герой популярного диснеевского мультфильма "Король Лев". Замечен в тесных дружеских связях с мангустом Тимоном и самим Сибмой - Королем Львом. Непревзойденный исполнитель хита всех времен и народов "Акуна матата". Песня весьма близка нашим соотечественникам, потому что словосочетание "акуна матата" в переводе на русский с языка суахили означает "нет проблем!"'
      },
      {
        id: 3,
        news_title: "Мисс Пигги",
        text:
          'Персонаж известного американского кукольного сериала "Маппет-шоу". Впервые появившись на экранах в 1976 году, "Маппет-шоу", придуманное Джимом Хенсоном, стало одной из самых популярных и самых "долгоиграющих" развлекательных программ в истории телевидения. В то время кукольные персонажи красовались каждую неделю перед 235 миллионами телезрителей более чем 100 стран, в том числе и Советского Союза, а затем они фигурировали и в других телепрограммах, и даже в кино. Друзья Мисс Пигги - лягушонок Кермит, медвежонок Фоззи, орленок Сэм и крыса Риццо. А сама Мисс Пигги названа одной из самых обаятельных хрюшек за всю историю кино.'
      },
      {
        id: 4,
        news_title: "Поросенок Фунтик",
        text:
          'Отважный и талантливый герой мультипликационных фильмов, на протяжении четырех серий ("Неуловимый Фунтик", "Фунтик и сыщики", "Фунтик и старушка с усами", "Фунтик в цирке") бегающий от коварной владелицы универмага "Слеза ребенка" госпожи Белладонны. Автор сказки о поросенке - писатель В. Шульжик, создатели мультсериала - известные российские аниматоры Анатолий Солин и Инна Пшеничная. Аудиосказку о поросенке озвучивали такие звезды, как Армен Джигарханян, Спартак Мишулин и Ольга Аросева. А сам поросенок настолько популярен, что редкий мобильный телефон не содержит его изображение, не говоря уже об известных песенках из мультфильма. Более того, имя Фунтик явно лидирует среди кличек поросят. Крылатая фраза: "Подайте на домики для бездомных поросят".'
      },
      {
        id: 5,
        news_title: "Хрюша",
        text:
          ' Мегазвезда популярной программы "Спокойной ночи, малыши!". Дружит с вороной Каркушей, зайцем Степашкой и щенком Филей. Трудно поверить, но этому вечно молодому поросенку уже 35 лет. Долгое время озвучивала Хрюшу актриса Наталья Державина. А нынче голосом детского любимца говорит его ровесница Оксана Чебанюк - актриса Театра Образцова. Хрюшу сотоварищи приглашали на телемост с Америкой, в "Голубые огоньки" и даже на праздник в Госдуму. Вот и пойми теперь, кто смотрит передачу "Спокойной ночи, малыши!" Или просто дети выросли, а Хрюшу забыть не могут. Даже мисс Вселенная Оксана Федорова стала ведущей программы "Спокойной ночи, малыши!", чтобы быть поближе к всенародному любимцу.'
      },
      {
        id: 6,
        news_title: " Хрюн Моржов",
        text:
          'Главный герой популярной программы "Тушите свет!" Народный персонаж, который в случае чего может и крепким словом припечатать. Соратник Хрюна - заяц Степан Капуста. Придуман в студии "Пилот ТВ" (глава студии - Александр Татарский, продюсеры и авторы сценариев программы "Тушите свет!" Ростислав Кривицкий и Владимир Неклюдов), а прообразы Хрюна и Степана - колобки - браться пилоты. За кадром образ Хрюна Моржова исполнял актер Алексей Колган, который, кстати, родился в год Свиньи. Самые известные словечки Хрюна: "Внушаить", "Мощно задвинул", "Вот иманна!" Во времена коровьего бешенства Хрюн разразился такой шуткой: "Мясо есть нельзя?" - "Нельзя". - "А мучные изделия можно?" - "Можно". - "Тогда будем есть коровьи лепешки". Краткая характеристика Хрюна: "Он любил арабов и евреев за то, что они его не переваривают".'
      },
      {
        id: 7,
        news_title: "Пятачок",
        text:
          'Персонаж знаменитой книги писателя Алена Александра Милна "Винни-Пух и все-все-все". На русском языке книга была талантливо пересказана писателем и поэтом Борисом Заходером. Лучший друг медвежонка Винни-Пуха - поросенок Пятачок стал персонажем нарицательным. По книжке диснеевская студия сняла мультфильм, но нашему зрителю ближе другой, снятый режиссером Федором Хитруком, в котором Винни-Пуха озвучил актер Евгений Леонов, а Пятачка - актриса Ия Саввина. Нынче образ Пятачка вошел в классику, поросенок превратился в героя анекдотов, а песенка "Куда идем мы с Пятачком?" стала почти что фольклором и используется во всех новогодних капустниках.'
      },
      {
        id: 8,
        news_title: " Поросенок Бэйб",
        text:
          'Именно ему посвящены столь любимые детьми и взрослыми фильмы "Поросенок Бэйб" и "Поросенок в городе". Последний снят австралийским режиссером Джорджем Миллером, известным зрителю по картинам "Иствикские ведьмы" и "Безумный Макс". Заглавную песню к картине исполнил один из величайших музыкантов современности Питер Гэбриел. \n Бэйб появился на свет путем "скрещивания" 48 живых свинушек с анимационной моделью. Гримеры рисовали каждой свинье брови и челку, а движения рта создавались на компьютере. В итоге эта забавная семейная картина получила совершенно серьезных "Оскаров" за музыку и спецэффекты, а на церемонии и вовсе была одним из фаворитов: выдвигалась на приз киноакадемии в 7 номинациях, в том числе за режиссуру, сценарий и как лучший фильм.'
      },
      {
        id: 9,
        news_title: "Свинья-копилка",
        text:
          ' Персонаж одноименной сказки Андерсена давно уже стала своеобразным символом. Другие игрушечные животные, сделанные в форме копилок, прямо скажем, не столь популярны. Андерсеновская героиня, напомним, была глиняной, набитой битком так, что "уж и не брякала даже" и щель на ее спине была расширена ножом. Стояла она на шкафу и смотрела на все сверху вниз - "она ведь могла купить все это, а такая мысль хоть кому придаст уверенности в себе". В конце концов, предавшись мыслям о завещании и похоронах, свинья свалилась со шкафа на пол и разлетелась вдребезги, а ее место заняла новая свинья-копилка.'
      },
      {
        id: 10,
        news_title: "Весельчак У",
        text:
          ' Свин из мультфильма "Тайна Третьей планеты", снятого по книге Кира Булычева "Путешествие Алисы" режиссером Романом Качановым. И мультфильм, и книга рассказывают о приключениях маленькой девочки Алисы Селезневой, ее папы - капитана Селезнева и его друга капитана Зеленого. А также добродушного Громозеки и птицы Говоруна, отличающейся умом и сообразительностью. Что касается Весельчака У - этот свин не то чтобы приятный, но запоминающийся. Хотя местами ведет себя как настоящий поросенок.'
      }
    ];

    const newsListLocal = JSON.parse(localStorage.getItem("newsList"));
    this.setState({
      newsList: newsListLocal ? newsListLocal : newsListTemplate
    });
    if (newsListLocal == undefined)
      localStorage.setItem("newsList", JSON.stringify(newsList));
    return null;
  }

  componentDidUpdate() {
    const { newsList } = this.state;
    localStorage.setItem("newsList", JSON.stringify(newsList));
  }

  createItem(item) {
    const { newsList } = this.state;
    this.setState({
      newsList: [item, ...newsList],
      isShowForm: false
    });
  }
  updateItem(item) {
    const { newsList } = this.state;
    this.setState({
      newsList: newsList.map(elem => (elem.id === item.id ? item : elem)),
      isShowForm: false
    });
  }

  removeItem(itemId) {
    const { rm, newsList } = this.state;
    this.setState({
      newsList: newsList.filter(item => item.id !== itemId),
      rm: !rm
    });
  }
  cancelEdit() {
    const { isShowForm } = this.state;
    this.setState({
      isShowForm: !isShowForm
    });
  }
  render() {
    const { isShowForm, newsList } = this.state;
    return (
      <>
        <div className="list">
          <Title />
          <div className="novigation">
            {!isShowForm ? (
              <button className="button" onClick={this.cancelEdit}>
                Add news
              </button>
            ) : (
              ""
            )}
          </div>

          {isShowForm ? (
            <Form addFromProps={this.createItem} cancelEdit={this.cancelEdit} />
          ) : (
            ""
          )}
          <List
            newsFromList={newsList}
            removeFromProps={this.removeItem}
            updateFromProps={this.updateItem}
          />
        </div>
      </>
    );
  }
}

export default News;
