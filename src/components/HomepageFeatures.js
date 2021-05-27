import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

import Translate from '@docusaurus/Translate'; // i18n component

const FeatureList = [
  {
    title: (
      <Translate
        id="homepage.Features.Title1">
      </Translate>
    ),
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate
        id="homepage.Features.Description1">
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.Features.Title2">
      </Translate>
    ),
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate
        id="homepage.Features.Description2">
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.Features.Title3">
      </Translate>
    ),
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate
        id="homepage.Features.Description3">
      </Translate>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
