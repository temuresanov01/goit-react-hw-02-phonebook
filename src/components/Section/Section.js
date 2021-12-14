import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={s.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
};

Section.defaultProps = {
  title: '',
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Section;
