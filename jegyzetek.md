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

#### 7. Login API

- post endpoint ami egy usert fogad
- a findOne()-nak átadjuk a user email-jét hogy találunk-e ilyet a db-ben
- kezeljük az eseteket

#### 8. Fetch api

- hardcodeolt eventeknek írunk get endpointot

#### 9. Angular frontend alapok

- létrehozzuk az angular appot
- létrehozunk komponenseket (login, register, events stb..)
- a routok közé felvesszük az útvonalakat és az azokhoz tartozó komponenseket

- azz app.component.html-t feltöltjük

  - responsive toggle menü és oldal neve
  - a nav elemeknek megadjuk a routerLink-ben hogy hova navigáljanak és a routerLinkActive rárak egy active css osztályt ha az útvonal aktív

- router-outlet ahol az aktív route komponense fog betölteni

#### 10. register component

- létrehozunk egy formot ahova email címet és jelszót lehet írni
- ngModel two-way bindinggel átadjuk a registerUserDatanak az inputba írt elemeket és a registerUser() kiírja a konzolra

#### 11. auth service

- létrehozunk egy service-t amit a backenddel kommunikál

- implementáljuk a login és a register user metódusokat amik a backendnek elküldik a user adatait

- a komponensek feliratkoznak a metódusokra és kiírják a konzolra a visszaérkező választ (ami egy user)

- FONTOS!: `NullInjectorError: No provider for _HttpClient!`

  - ezt a `provideHttpClient()` app.config providerek közé felvevéssel tudjuk megoldani

- a szerverhez hozzá kell adni a cors-ot mert a szerver és a frontent különböző porton van

#### 12. events service

- létrehozunk egy servicet ami lekéri a backendről a normál és a special eventeket

- a megfelelő komponensben feliratkozunk
