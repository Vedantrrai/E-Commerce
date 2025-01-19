import NewCollectionHeader from "./new-collection-header/new-collections-header";
import Cards from "./collection-cards/collection-cards";
import "./new-collection.css";
const NewCollection = () => {
  const cards_info = [
      {
        "image": "https://images.unsplash.com/photo-1637264486270-3238d60aa71a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwZHJlc3Npbmd8ZW58MHx8MHx8fDA%3D",
        "title": "Men",
        "subTitle": "Explore the latest men's collection",
        "price": 49.99
      },
      {
        "image": "https://media.istockphoto.com/id/1256672588/photo/woman-putting-earrings.webp?a=1&b=1&s=612x612&w=0&k=20&c=U9pKwapjV7unCdved5WaD2mxVlHQnqMnZrza0MZXmVM=",
        "title": "Women",
        "subTitle": "Trendy styles for women",
        "price": 59.99
      },
      {
        "image": "https://media.istockphoto.com/id/1038701502/photo/woman-is-choosing-the-right-dress-to-wear.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z9BX_EjkiyrQuo8kzQi3s80lDxvSKdDFHPW9mAHwmYo=",
        "title": "Womens",
        "subTitle": "Chic and modern women's wear",
        "price": 69.99
      },
      {
        "image": "https://plus.unsplash.com/premium_photo-1698305282808-d2520bebf7e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lkcyUyMGRyZXNzaW5nfGVufDB8fDB8fHww",
        "title": "Kids",
        "subTitle": "Adorable outfits for kids",
        "price": 39.99
      },
      {
        "image": "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
        "title": "Accessories",
        "subTitle": "Complete your look with accessories",
        "price": 19.99
      }
    
  ];
  return (
    <div className="new-collection">
      <NewCollectionHeader />
      <div className="list-cards">
        {cards_info.map((item, index) => {
          return (
            <Cards
              key={index}
              image={item.image}
              title={item.title}
              sub_title={item.subTitle}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
