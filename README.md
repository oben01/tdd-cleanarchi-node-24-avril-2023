<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# UberWeal SAAS!

L'application Uber-Like qui permet de réserver un Driver instantanément !

## Règles de gestion

Un Rider peut à tout moment réserver une course pour se rendre au point de son choix.
Une course est effectivement réservée lorsqu'un Driver libre a été assigné par le système.

Selon la nature de la course, le prix diffère.
- Pour une course de Paris vers l'extérieur, le prix est de **30** euros
- Pour une course de l'extérieur vers Paris, le prix est de **0** euro
- Pour une course intra-muros, le prix est de **10** euros
- Pour une course hors Paris, le prix est de **50** euros


- Pour réserver une course, le Rider doit avoir assez de fonds sur son compte bancaire.


- Tant que le Driver n'est pas assigné, le Rider ne peut soumettre une autre demande de réservation à moins d'annuler la courante.


- Lors de sa première année d'utilisation, le Rider paiera le prix de la course divisé par 2.


- Si le nombre de kilomètres est inférieur à 5 km, alors il aura 5 euros de réduction.

# User Story - Réserver une course

En tant que **Rider**,

Je souhaite **réserver une course** pouvant m'amener à ma destination

De sorte à assurer une alternative efficace aux transports en commun.

# User Story - Lister toutes mes courses passées

En tant que **Rider**,

Je souhaite **lister tout l'historique de mes courses avec mention des Drivers respectifs**

De sorte à pouvoir me figurer la fréquence de mon utilisation.



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm test
# unit tests with watch
$ npm run test:watch

# integration tests
$ npm run test:integration
# integration tests with watch
$ npm run test:integration:watch

# e2e tests
$ npm run test:e2e
# e2e tests with watch
$ npm run test:e2e:watch

# all tests
$ npm run test:all
# all tests with watch
$ npm run test:e2e:watch
# all tests with coverage
$ npm run test:all:coverage
```
