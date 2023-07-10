import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Alio, sale, rosmarino",
    price: 4,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Focaccia Dolce",
    ingredients: "Nutella,zucchero a velo",
    price: 6.5,
    photoName: "pizzas/nutella.jpg",
    soldOut: false,
  },
  {
    name: "Marinara",
    ingredients: "Pomodoro, alio, prezzemolo, aglio, origano",
    price: 4,
    photoName: "pizzas/marinara.jpg",
    soldOut: false,
  },
  {
    name: "Margherita",
    ingredients: "Pomodoro, mozzzarella",
    price: 5,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Bella Napoli",
    ingredients: "Doppia pasta, pomodoro, bufala, pomodoro fresco, basilico",
    price: 8.5,
    photoName: "pizzas/bellanapoli.jpg",
    soldOut: false,
  },
  {
    name: "Napoli",
    ingredients: "Pomodoro, mozzarella, capperi, acciughe, origano",
    price: 6.5,
    photoName: "pizzas/napoli.jpg",
    soldOut: false,
  },
  {
    name: "4 Stagioni",
    ingredients:
      "Pomodoro, mozzarella, prosciutto cotto, carciofi, olive, funghi",
    price: 8,
    photoName: "pizzas/4stagioni.jpg",
    soldOut: false,
  },
  {
    name: "Capricciosa",
    ingredients: "Pomodoro, mozzarella, prosciutto cotto, carciofi, funghi",
    price: 7.5,
    photoName: "pizzas/capriciosa.jpg",
    soldOut: false,
  },
  {
    name: "Veneziana",
    ingredients: "Pomodoro, mozzarella, gorgonzola, misto formaggi",
    price: 7,
    photoName: "pizzas/veneziana.jpg",
    soldOut: false,
  },
  {
    name: "4 Formaggi",
    ingredients: "Pomodoro, mozzarella, gorgonzola, misto formaggi",
    price: 7.5,
    photoName: "pizzas/4formagi.jpg",
    soldOut: false,
  },
  {
    name: "Tonno Cipolla",
    ingredients: "Pomodoro, mozzarella, tonno, cipolla",
    price: 7,
    photoName: "pizzas/tonocipola.jpg",
    soldOut: false,
  },
  {
    name: "Tedesca",
    ingredients: "Pomodoro, mozzarella, patate fritte, wurstel",
    price: 7.5,
    photoName: "pizzas/tedesca.jpg",
    soldOut: false,
  },
  {
    name: "Patate",
    ingredients: "Pomodoro, mozzarella, patate fritte",
    price: 7,
    photoName: "pizzas/patate.jpg",
    soldOut: false,
  },
  {
    name: "Parmigiana",
    ingredients: "Pomodoro, mozzarella, melanzone fritte, parmigiano, basilico",
    price: 8,
    photoName: "pizzas/4formagi.jpg",
    soldOut: false,
  },
  {
    name: "Sarda",
    ingredients: "Pomodoro, mozzarella, salsiccia, pecorino",
    price: 7,
    photoName: "pizzas/sarda.jpg",
    soldOut: false,
  },
  {
    name: "Vegetariana",
    ingredients:
      "Pomodoro, mozzarella, zucchine, melanzone, peperoni, radicchio",
    price: 8,
    photoName: "pizzas/vegetariana.jpg",
    soldOut: false,
  },

  {
    name: "Amatriciana",
    ingredients: "Pomodoro, mozzarella, guanciale, pomodoro fresco, pecorino",
    price: 7.5,
    photoName: "pizzas/amatr.jpg",
    soldOut: false,
  },
  {
    name: "Denisa",
    ingredients: "Pomodoro, mozzarella, wurstel, cippolla",
    price: 7,
    photoName: "pizzas/deni.jpg",
    soldOut: false,
  },
  {
    name: "Boscaiola",
    ingredients: "Pomodoro, mozzarella, salsiccia, funghi, cipolla",
    price: 7.5,
    photoName: "pizzas/bosca.jpg",
    soldOut: false,
  },
  {
    name: "Frutti di mare",
    ingredients: "Pomodoro, mozzarella, frutti di mare",
    price: 10.5,
    photoName: "pizzas/fructe.jpg",
    soldOut: false,
  },
  {
    name: "Mari e monti",
    ingredients: "Pomodoro, mozzarella, gamberetti funghi, burata",
    price: 9,
    photoName: "pizzas/gambe.jpg",
    soldOut: false,
  },
  {
    name: "Pronto pizza",
    ingredients: "Pomodoro, bufala, porcini, prosciutto crudo",
    price: 9,
    photoName: "pizzas/pronto.jpg",
    soldOut: false,
  },
  {
    name: "Parigi",
    ingredients: "Pomodoro, mozzarella, prosciutto crudo, panna",
    price: 7.5,
    photoName: "pizzas/pronto.jpg",
    soldOut: false,
  },
  {
    name: "Alex",
    ingredients:
      "Pomodoro, mozzarella, pomodoro fresco, rucola, grana a scaglie",
    price: 7.5,
    photoName: "pizzas/alex.jpg",
    soldOut: false,
  },
  {
    name: "Cavallo",
    ingredients:
      "Pomodoro, mozzarella,carpaccio cavallo, rucolla, grana, olio, aglio prezzemolo",
    price: 8,
    photoName: "pizzas/caval.jpg",
    soldOut: false,
  },
  {
    name: "Tris",
    ingredients: "Pomodoro, mozzarella, procini, funghi, atunna",
    price: 9,
    photoName: "pizzas/por.jpg",
    soldOut: false,
  },
  {
    name: "Valtellina",
    ingredients:
      "Pomodoro, mozzarella, bresaola, porcini, rucola, grana a scaglie",
    price: 9,
    photoName: "pizzas/bes.jpg",
    soldOut: false,
  },
  {
    name: "Calzone",
    ingredients: "Pomodoro, mozzarella, prosciutto cotto, funghi",
    price: 7.5,
    photoName: "pizzas/calzone.jpg",
    soldOut: false,
  },
  {
    name: "Caprese",
    ingredients:
      "Pomodoro, mozzarella, bufala, pomodoro fresco, basilico, origano",
    price: 8.5,
    photoName: "pizzas/cap.jpg",
    soldOut: false,
  },
  {
    name: "Silvia",
    ingredients: "Pomodoro, mozzarella, gamberetti, rucola, battarga",
    price: 9,
    photoName: "pizzas/gam.jpg",
    soldOut: false,
  },
  {
    name: "Norvegese",
    ingredients: "Pomodoro, mozzarella, salmone, burata",
    price: 9,
    photoName: "pizzas/sal.jpg",
    soldOut: false,
  },
  {
    name: "Oschera ",
    ingredients: "Pomodoro, mozzarella, antunna, salsiccia fresca, pecorino",
    price: 8.5,
    photoName: "pizzas/sal.jpg",
    soldOut: false,
  },
  {
    name: "Assassina",
    ingredients:
      "Pomodoro, mozzarella, salsicci picante, cipolla tropea, peperoncino",
    price: 7.5,
    photoName: "pizzas/sal.jpg",
    soldOut: false,
  },
  {
    name: "Preziosa",
    ingredients: "Pomodoro, bufala, speck, porcini, rucola",
    price: 9,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Affumicata",
    ingredients: "Pomodoro, mozzarella, pavola affumicata, speck",
    price: 8,
    photoName: "pizzas/bufala.jpg",
    soldOut: false,
  },
  {
    name: "Oristanese",
    ingredients: "Pomodoro, mozzarella,carciofi freschi, bottarga",
    price: 9,
    photoName: "pizzas/carciofi.jpg",
    soldOut: false,
  },
  {
    name: "Asparagi",
    ingredients: "Pomodoro, mozzarella, bacon, uova, asparagi",
    price: 9.5,
    photoName: "pizzas/bacon.jpg",
    soldOut: false,
  },
  {
    name: "Rustica",
    ingredients: "Pomodoro, mozzarella, bacon, rucola, grana a scaglie",
    price: 8,
    photoName: "pizzas/rustica.jpg",
    soldOut: false,
  },
  {
    name: "Carciofi",
    ingredients: "Pomodoro, mozzarella, carciofi  freschi, guanciale, cipolla",
    price: 8.5,
    photoName: "pizzas/carciofi.jpg",
    soldOut: false,
  },

  //Pizze bianche
  {
    name: "Carbonara",
    ingredients: "Mozzarella, guanciale, uovo, pecorino",
    price: 8,
    photoName: "pizzas/guanciale.jpg",
    soldOut: false,
  },
  {
    name: "Mortadella",
    ingredients: "Mozzarella, mortadella, granella di pistachio",
    price: 8,
    photoName: "pizzas/morta.jpg",
    soldOut: false,
  },
  {
    name: "Carlofortina",
    ingredients: "Mozzarella, pesto Genovese, tonno, pomodoro fresco",
    price: 8,
    photoName: "pizzas/tonocipola.jpg",
    soldOut: false,
  },
  {
    name: "Braccio di ferro",
    ingredients: "Mozzarella, spinaci, gorgonzola",
    price: 7.5,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Modena",
    ingredients:
      "Mozzarella, gorgonzola, radicchio, guanciale, glasso aceto balsamico",
    price: 8,
    photoName: "pizzas/modena.jpg",
    soldOut: false,
  },
  {
    name: "Sotto Bosco",
    ingredients: "Mozzarella, taleggio, porcini, lardo ",
    price: 8.5,
    photoName: "pizzas/porcini.jpg",
    soldOut: false,
  },
  {
    name: "Cacio pepe",
    ingredients: "Mozzarella, cacio pepe",
    price: 7,
    photoName: "pizzas/cacio.jpg",
    soldOut: false,
  },
  {
    name: "Valdostana",
    ingredients: "Mozzarella, prosciutto cotto, funghi, panna",
    price: 7.5,
    photoName: "pizzas/valdo.jpg",
    soldOut: false,
  },
  {
    name: "Invernale",
    ingredients: "Mozzarella, lardo, gorgonzola, noci",
    price: 8,
    photoName: "pizzas/go.jpg",
    soldOut: false,
  },
  {
    name: "Zaferano",
    ingredients: "Mozzarella, salsiccia fresca, gorgonzola, crema di patate",
    price: 8,
    photoName: "pizzas/zafer.jpg",
    soldOut: false,
  },
  {
    name: "Agrodolce",
    ingredients: "Mozzarella, cipolle caramellate, acciughe, pomodoro gresco",
    price: 7.5,
    photoName: "pizzas/agro.jpg",
    soldOut: false,
  },
  {
    name: "Coctail gamberetti",
    ingredients: "Mozzarella, insalata iceberg, gamberetti, salsa cocktail",
    price: 9,
    photoName: "pizzas/gam.jpg",
    soldOut: false,
  },
  {
    name: "Spada",
    ingredients:
      "Mozzarella, spada affumicato, melanzane, fritte, rucola, aceto balsamico",
    price: 10,
    photoName: "pizzas/spada.jpg",
    soldOut: false,
  },
  {
    name: "Patate fritte",
    price: 3.5,
    photoName: "pizzas/fries.jpg",
    soldOut: false,
  },

  {
    name: "Pizza ridotta",
    price: -1,
    photoName: "pizzas/ridota.jpg",
    soldOut: false,
  },
  {
    name: "Aggiunte varie",
    price: +1.5,
    photoName: "pizzas/agiota.jpg",
    soldOut: false,
  },
  {
    name: "Aggiunte",
    price: +2,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>PRONTO PIZZA</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <React.Fragment>
          <p className="pronto-paragraph">
            Qui da Pronto Pizza scegliamo i migliori ingredienti e prepariamo
            con passione ogni pizza.Pizza cotta nel forno a legna.
          </p>
          {/* <p>Pizza Clasique & Pizza Bianche</p> */}

          <p className="info">Fotografiile sunt cu titlul de informare</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObject }) {
  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>

        <span>
          {pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price + "Euro"}
        </span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 19;
  const closeHour = 23;
  const openDay = "Martedi";
  const closeDay = "Domenica";
  const isOpen = hour > openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={openHour} openHour={openHour} />
      ) : (
        <p>
          Siamo aperti da {openDay} a {closeDay}, dalle {openHour}:30 alle{" "}
          {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

// function Logo() {
//   return <img src="pizzas/logo.jpg/" alt="logo" />;
// }

function Order({ closeHour, openHour, openDay, closeDay }) {
  return (
    <div className="order">
      <p>
        Siamo aperti da {openDay} a {closeDay}, dalle {openHour}:30 {closeHour}
        :00.
        {/* We're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online */}
      </p>
      {/* <button className="btn">Order</button> */}
    </div>
  );
}

//React version 18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
