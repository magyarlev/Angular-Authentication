#### 1. Introduction

- MEAN Stack

  - mongoDb - adattárolás
  - express - rest API
  - angular - frontend
  - nodejs - backend

- app összefoglalása:

  - esemény hub
  - eseményeket kilistázzuk
  - sima eventek és tagoknak szóló események vannak
  - ha a tagoknak szóló eseményeket akarjuk megnézni be kell jelentkezni
  - létrehozhatunk új felhasználót

#### 2.Course Overview

- express szerver, mongoDb beállítása

- RESTful APIs

  - új felhasználó regisztrálása
  - bejelentkezés
  - normál események lekérése
  - tagoknak szóló események lekérdezése

- tesztelés Postmannel
- Angular app létrehozása
- authentikáció

#### 3. Express server

- server.js-ben importáljuk az express-t
- létrehozunk egy get útvonalat
- hozzáadunk egy routes mappát ahol a route-okat fogjuk tárolni

#### 4. MongoDB

- létrehozunk egy új adatbázist eventsdb néven
- hozzáadunk egy collectiont users néven

#### 5. Mongoose

- mongoose: mongodb object mapping

  - az adatbázis adatait js objectté alakítja amit használhatunk az appunkban

- importáljuk a mongoose-t
- a mongoose.connect()-nek megadjuk az adatbázis connection stringjét
- a videóban át lehetett adni a connection()-nek egy callbacket error kezelésre, de már nem lehet úgyhogy try catch ben await-elni kell a connectiont

#### 6. Registration API

- létrehozunk egy post endpointot ami a usert elmenti a mongodb adatbázisba

#### Testing user registration with Postman

-
