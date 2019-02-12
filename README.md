# Showcase | Airbus Bremen

A little project designed to showcase the capabilities and achievements of Airbus Bremen.
Through scrolling, the user is taken through a journey from the skies to deep space.
During the journey different products built by Airbus Bremen are highlighted and animated, like airplanes or modules of the International Space Station.

The product animations are created in After Effects and played back using airbnb's library [lottie](https://github.com/airbnb/lottie-web),
composition is handled by [GSAP](https://greensock.com/)'s TimelineMax and the composition(s) are synced to the users' scrolling with the help of [ScrollMagic](http://scrollmagic.io/).

&nbsp;

> install dependencies:
> `npm install`

> run development server:
> (HMR is disabled as the code directly manipulates the DOM)
> `npm start`

> Build for production with minification and compression:
> `npm run build`
