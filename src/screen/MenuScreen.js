import React, { useEffect, useState } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import firebaseApp from "../credenciales";
const firestore = getFirestore(firebaseApp);

export const MenuScreen = () => {
  const [dishesList, setDishesList] = useState(null);

  async function getData() {
    const array = await getDocs(collection(firestore, "dishes"));
    const dishess = array.docs;
    const dishes = [];
    dishess.map((dish) => dishes.push(dish.data()));
    // console.log(dishes);
    return dishes;
  }

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setDishesList(data);
    }
    fetchData();
  }, []);

  const [query, setQuery] = useState("");

  const getFilteredItems = (query, dishes) => {
    if (query === "") {
      return dishes;
    }
    return dishes.filter((dish) => dish.name.toLowerCase().includes(query));
  };

  const filteredDishes = getFilteredItems(query, dishesList);

  return (
    <>
      <div className="space bg-darkness footer"></div>
      <div className="box bg-darkness text-light footer">
        <h1>This is our menu</h1>
        <hr />

        <div className="input-group input-group-sm pb-3 pt-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Food filter
          </span>
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>

        <div className="row pt-3 pb-3">
          {dishesList !== null
            ? filteredDishes.map((dish) => (
                <div
                  key={dish.id}
                  className="col-12 col-md-4 col-lg-3
                menu-item mt-2 mb-2"
                >
                  <div className="menu-img">
                    <img src={dish.img} alt={dish.name} />
                  </div>
                  <div className="menu-text">
                    <div>
                      <h5 className="pt-3">{dish.name}</h5>
                      <hr />
                      <p>{dish.description}</p>
                    </div>
                    <div>
                      <h5>${dish.price}</h5>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};
