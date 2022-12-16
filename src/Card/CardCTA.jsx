import React from 'react';
import './Card.css';
import { GitHubIcon, GitlabIcon, Ethereum4Icon, LinkedInIcon } from './Icons';

export const CardCTA = () => (
  <div class="row row-3">
    <div class="icons">
      <button>
        <GitHubIcon />
      </button>
      <button>
        <LinkedInIcon />
      </button>
      <button>
        <GitlabIcon />
      </button>
      <button>
        <Ethereum4Icon />
      </button>
    </div>
    <div class="follow">
      <button class="follow-btn">Follow</button>
    </div>
  </div>
);
