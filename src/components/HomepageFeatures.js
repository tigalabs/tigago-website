import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

import Translate, { translate } from '@docusaurus/Translate'; // i18n component

const FeatureList = [
  {
    title: translate({ id: "homepage.Features.Title1" }),
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: translate({ id: "homepage.Features.Description1" }),
  },
  {
    title: translate({ id: "homepage.Features.Title2" }),
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: translate({ id: "homepage.Features.Description2" }),
  },
  {
    title: translate({ id: "homepage.Features.Title3" }),
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: translate({ id: "homepage.Features.Description3" }),
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
