export const ReviewsBlock = () => {
  return (
    <div className="flex w-full flex-row items-center justify-center gap-16  p-20 max-xl:flex-col max-lg:flex-col max-lg:gap-20 max-md:gap-16 max-sm:flex-col max-sm:gap-12 max-sm:p-8">
      <h1 className="flex-shrink-0 text-center text-6xl font-bold tracking-wide max-lg:text-5xl">
        Наши отзывы
      </h1>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 items-center rounded-full bg-white" />
            <h3>Иван</h3>
          </div>
          <p>
            «Мы мечтали переехать в дом мечты и как тогда было модно, да и
            сейчас тоже, все вдохновлялись красивыми картинками эстетичного
            ремонта дома из пинтереста. Мы понимали, что у нас нет времени и
            энергии все это реализовать, поэтому мы обратились в idealist.
            Ведущий дизайнер не только спроектировал наш интерьер, но и
            сопровождал на всех этапах: покупка стройматериалов,мебели, техники.
            Работа с дизайнерами интерьера, это инвестиция в будущее, создать
            для себя не только красивое пространство, но и удобное именно под
            запросы Вашей семьи»
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white" />
            <h3>Алина</h3>
          </div>
          <p>
            «Хорошо, что мы обратились в дизайн-студию idealist. Дизайнеры были
            всегда на связи, не смотря на то что у нас, не полноценный
            дизайн-проект, а концептуальная разработка в моменте-все сделали
            шикарно! Также хочу отметить, что при подборе мебели, элементов
            интерьера студия предоставила персональные скидки в некоторых
            магазинах»
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white" />
            <h3>Сергей</h3>
          </div>
          <p>
            «Хотим выразить благодарность студии idealist, за их профессионализм
            и умение подбирать, то чего хочет человек. Дизайн-проект, который
            был создан – подошел для нашей семьи»
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white" />
            <h3>Светлана</h3>
          </div>
          <p>
            «Ведущий дизайнер студии idealist, проделал большую работу и учел
            все мои пожелания, мечты в каждой мелочи моего интерьера!
            Самостоятельно я не могла определиться: чего именно хочется, какие
            цвета и текстуры, потому что сейчас выбор всего модного огромен. И
            именно поэтому обратилась в студию за несколько консультаций, мне
            помогли создать дизайн- интерьера моей мечты!»
          </p>
        </div>
      </div>
    </div>
  );
};
