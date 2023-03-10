import {createContext,useContext,useState,useEffect} from "react"


const BasketContext = createContext();

const defaultBasket = JSON.parse(localStorage.getItem("basket")) || [];

const BasketProvider=({children})=>{
    
const [items,setItems]=useState(defaultBasket);


useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(items));
  }, [items]);

const AddToBasket=(data,findItem)=>{

    if (!findItem) {
    
      return setItems((items)=>([...items,data]))


    }
    
   const filtered= items.filter((item)=>item.id!==findItem.id)
    setItems(filtered)
    }


    const removeFromBasket=(item_id)=>{

    const filtered=items.filter((item)=>item.id!==item_id) 

    setItems(filtered)


    }


 const emptyBasket=()=>{setItems([])};




const values={items,
    setItems,
    AddToBasket,removeFromBasket,emptyBasket}





return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>}

const useBasket = () => useContext(BasketContext)


export{BasketProvider,useBasket}