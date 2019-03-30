<p align="center">
    <a href="https://www.nervo-js.org" rel="nofollow"><img src="https://raw.githubusercontent.com/SlimMarten/nervo/development/logo.svg?sanitize=true" align="center" width="300"></a>
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
