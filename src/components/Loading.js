import React, { Fragment } from 'react';
import { css } from '@emotion/core';
import { FadeLoader } from 'react-spinners';

export default () => (
  <Fragment>
    <div className="loading-container">
      <FadeLoader css={'margin:auto;'} />
    </div>
  </Fragment>
);
