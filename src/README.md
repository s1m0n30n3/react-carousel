# React Deadly Simple Gallery

Carousel Component to display images in sequence, supports touch events, click events, arrows navigation, dot navigation

## Fast usage

```bash
npm i react-deadly-simple-carousel
```

To use the carousel:

```jsx
import React from "react";
import { Gallery } from "react-deadly-simple-carousel";

// IMPORTANT: import the gallery css
import "react-deadly-simple-carousel/dist/style.css";

export const YourComponent = () => {
  return (
    <Gallery
      images={[
        {
          src: "path/to/your.img",
          alt: "alt description",
        },
        {
          src: "path/to/your.img",
          alt: "alt description",
        },
      ]}
    />
  );
};
```

## Gallery - Demo and Code Generator

Here you can play with the gallery and generate yours. Link [Generator](https://s1m0n30n3.github.io/carousel-demo/)

## Work in progress

Complete documentation coming soon. 🥵

## Contacts

For any request and urgent question contact me here: `simone.piz1984@gmail.com`
