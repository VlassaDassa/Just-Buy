import React, {useState, useEffect} from "react";
import star from "../../../assets/images/delivery_point/star.svg";
import star_fill from "../../../assets/images/delivery_point/star_fill.svg";
import RatingPoint from "../ratingPoint";



function FeedbackItem({ itemData }) {

  
  return (
    <div className="delivery_point_feedback_item">
      <div className="delivery_point_feedback_item__header">
        
        <p className="delivery_point_feedback_item__name">{itemData.name}</p>
        <p className="delivery_point_feedback_item__date">{itemData.date}</p>
      </div>
      <div className="delivery_point_feedback_item__score">
        {itemData.rating > 0 && 
          [...Array(5)].map((_, i) => (
            <img
              key={i}
              className="delivery_point_feedback_item__score_ico"
              src={i < itemData.rating ? star_fill : star}
              alt={`Звезда ${i + 1}`}
            />
        ))}
      </div>
      <p className="delivery_point_feedback_item__content">{itemData.content}</p>
    </div>
  );
}

function FeedbackList() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  const feedbackData = [
    {
      'id': 1,
      'name': 'Влад',
      'date': '28/06/2023',
      'rating': 4,
      'content': 'Кассирша весьма и весьма груба. Меня словно морально изнасиловали, когда я вёл с ней эту возмутительную беседу. Я мечтал только об одном: скорее побежать домой, спрятаться за маминой спиной и плакать ей в колено. Ставлю 5 звёзд, потому что давно никто не будил во мне столь острых чувств. Спасибо.',
    },
    {
        'id': 2,
        'name': 'Кирилл',
        'date': '04/04/2023',
        'rating': 3,
        'content': 'Хороший пункт выдачи, накормили, напоили, встретили с хлебом и солью. Я чрезвычайно рад, что в нашем городе есть подобное.',
    },

    {
        'id': 3,
        'name': 'Андрей',
        'date': '23/04/2023',
        'rating': 5,
        'content': 'Получил по лицу'
    },

    {
        'id': 4,
        'name': 'Ксюша',
        'date': '28/06/2023',
        'rating': 4,
        'content': 'Кассирша весьма и весьма груба. Меня словно морально изнасиловали, когда я вёл с ней эту возмутительную беседу я мечтал только об одном: скорее побежать домой, спрятаться за маминой спиной и плакать ей в колено. Ставлю 5 звёзд, потому что давно никто не будил во мне столь острых чувств. Спасибо.',
    },

    {
        'id': 5,
        'name': 'Сергей',
        'date': '04/04/2023',
        'rating': 3,
        'content': 'Хороший пункт выдачи, накормили, напоили, встретили с хлебом и солью. Я чрезвычайно рад, что в нашем городе есть подобное.',
    },

    {
        'id': 6,
        'name': 'Арсений',
        'date': '23/04/2023',
        'rating': 5,
        'content': 'Получил по лицу'
    },

    {
        'id': 7,
        'name': 'Олег',
        'date': '28/06/2023',
        'rating': 4,
        'content': 'Кассирша весьма и весьма груба. Меня словно морально изнасиловали, когда я вёл с ней эту возмутительную беседу я мечтал только об одном: скорее побежать домой, спрятаться за маминой спиной и плакать ей в колено. Ставлю 5 звёзд, потому что давно никто не будил во мне столь острых чувств. Спасибо.',
    },

    {
        'id': 8,
        'name': 'Никита',
        'date': '04/04/2023',
        'rating': 3,
        'content': 'Хороший пункт выдачи, накормили, напоили, встретили с хлебом и солью. Я чрезвычайно рад, что в нашем городе есть подобное.',
    },
    {
      'id': 9,
      'name': 'Афанасий',
      'date': '02/04/2023',
      'rating': 5,
      'content': 'Хороший пункт выдачи, накормили, напоили, встретили с хлебом и солью. Я чрезвычайно рад, что в нашем городе есть подобное.',
  },
  ];

  const averageRating =
    feedbackData.reduce((sum, item) => sum + item.rating, 0) /
    feedbackData.length;

  const remainingItems = feedbackData.length - startIndex;
  const itemsToShow = Math.min(3, remainingItems);

  const showMore = () => {
    // setStartIndex((startIndex + itemsToShow) % feedbackData.length);
    setVisibleItems(visibleItems + 3);
  };
//  % feedbackData.length
  return (
    <div>
      <RatingPoint averageRating={averageRating} totalReviews={feedbackData.length} />
      <div className="delivery_point_feedback__items">
        {/* feedbackData.slice(startIndex, startIndex + itemsToShow */}
        {feedbackData.slice(startIndex, startIndex + visibleItems).map((item, index) => (
          <FeedbackItem key={index} itemData={item} />
        ))}
      </div>
      {/* remainingItems - itemsToShow === 0 ? */}
      {visibleItems >= feedbackData.length ? (
        <button className="delivery_point_feedback__btn" onClick={showMore} disabled>
          Больше отзывов нет
        </button>
      ) : (
        <button className="delivery_point_feedback__btn" onClick={showMore}>
          Показать больше
        </button>
      )}
    </div>
  );
}

export default FeedbackList;



