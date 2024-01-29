import SetMenu1 from "../assets/images/set menu-1-Indian-Naan-Family-Meal.jpg";
import ItemCard from "./ItemCard.jsx";

const items=[
    {
        id:1,
        image:SetMenu1,
        itemName:"Indian Naan Family Meal-Props",
        itemPrice:"1234",
        itemDesc1:"para 1",
        itemDesc2:"para 2",
        itemDesc3:"para 3"
    },
    {
        id:2,
        image:SetMenu1,
        itemName:"Indian Naan Family Meal-Props",
        itemPrice:"1234",
        itemDesc1:"para 1",
        itemDesc2:"para 2",
        itemDesc3:"para 3"
    },
    {
        id:3,
        image:SetMenu1,
        itemName:"Indian Naan Family Meal-Props",
        itemPrice:"1234",
        itemDesc1:"para 1",
        itemDesc2:"para 2",
        itemDesc3:"para 3"
    },
    {
        id:4,
        image:SetMenu1,
        itemName:"Indian Naan Family Meal-Props",
        itemPrice:"1234",
        itemDesc1:"para 1",
        itemDesc2:"para 2",
        itemDesc3:"para 3"
    },
    {
        id:5,
        image:SetMenu1,
        itemName:"Indian Naan Family Meal-Props",
        itemPrice:"1234",
        itemDesc1:"para 1",
        itemDesc2:"para 2",
        itemDesc3:"para 3"
    },
    {
        id:6,
        image:SetMenu1,
        itemName:"Indian Naan Family Meal-Props",
        itemPrice:"1234",
        itemDesc1:"para 1",
        itemDesc2:"para 2",
        itemDesc3:"para 3"
    },
]

function SetMenu(){
    return (
        <div className="border-b border-primaryColor mb-2">
            <p className="text-xl text-textColor font-serif">Set Menu</p>
            <br/>
            <div className="w-full grid grid-cols-3 gap-16 px-10 pb-10">
                {
                    items.map((item) => (
                        <ItemCard
                            key={item.id}
                            image={item.image}
                            itemName={item.itemName}
                            itemPrice={item.itemPrice}
                            itemDesc1={item.itemDesc1}
                            itemDesc2={item.itemDesc2}
                            itemDesc3={item.itemDesc3}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default SetMenu;