import Card from "./Card"

function Cards({datta , CardHandler , active}){
return(

    <div>
        {
            datta.map(Data=>{
                return <Card {...Data} CardHandler = {CardHandler} active={active} ></Card>
            })
        }
    </div>
);
}
export default Cards;