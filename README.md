<p align="center">
    <!-- <img align="center" src="http://exchange.weareslim.de/assets/images/svg/logo_blue.svg" width="100" height="auto" alt="slim Logo" class="js-lazy-loaded"> -->
    <h3 align="center">
        Nervo
    </h3>
    <p align="center">
        [WIP] Javascript Animation Library
    </p>
</p>

## Installation

```
npm i nervo
```

## Usage


```js
import * as Nervo from 'nervo';
```

## Tween

```js
const tween = new Nervo.Tween(start : {}, end : {}, parameters : {});
```

#### Start `type: {}`

```js
{
    x: 0,
    ...
}
```

#### End `type: {}`

```js
{
    x: 10,
    ...
}
```

#### Parameters `type: {}`

* autoStart `boolean`
* duration `float`
* easing `string`
* loop `boolean`
* onComplete `callback function`
* onProgress `callback function`
* onStart `callback function`
* timeScale `float`


#### Methods

* `.pause()`
* `.play()`
* `.start()`
* `.stop()`

## Track

```js
const track = new Nervo.Track(tween : [], parameters : {});
```

#### Tweens `type : []`
#### Parameters `type : {}`

* start `float`
* onComplete `callback function`
* onProgress `callback function`
* onStart `callback function`

## Timeline

```js
const timeline = new Nervo.Timeline(tweens : [], parameters : {});
```

#### Tweens `type : []`
#### Parameters `type : {}`

* autoStart `boolean`
* easing `string`
* loop `boolean`
* onComplete `callback function`
* onProgress `callback function`
* onStart `callback function`
* timeScale `boolean`

#### Methods

* `.pause()`
* `.play()`
* `.start()`
* `.stop()`
