"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@/components/themeProvider';
import { ClientSideFunction } from '@/utils/client-utils';

export default function ClientRoutePage() {
  const theme = useTheme();
  const settings = {
    dots: true,
  };
  const result = ClientSideFunction();
  return (
    <div className="image-slider-container">
      <h1 style={{ color: theme.colors.secondary }}>Client route Page </h1>
      <h1>Client Route {result}</h1>
      <Slider {...settings}>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
      </Slider>
    </div>
  );
}