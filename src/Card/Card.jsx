import React from 'react';
import { CardCTA } from './CardCTA';
import './Card.css';
import { InfoIcon } from '../Card/Icons';

export const Card = () => (
  <div class="card">
    <div class="row row-1">
      <div class="profile">
        <img
          src="https://res.cloudinary.com/dloekv0xp/image/upload/v1670489353/assets/85_h0fp55.jpg"
          alt=""
        />
        <div class="name">MetaMask</div>
        <div class="username">@metaMask</div>
      </div>
      <div class="progress">
        <div class="label">
          <div>6/8 Organizations</div>
          <div class="info-icon">
            <InfoIcon />
          </div>
        </div>
        <div class="progress-bar" />
      </div>
    </div>
    <div class="row row-2">
      <div class="description">
        MetaMask brings Ethereum to your web browser
      </div>
      <div class="followers">
        <span class="highlight">4K</span> Followers
      </div>
    </div>
    <CardCTA />
  </div>
);
