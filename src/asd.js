/**
 * ************************************
 *
 * @module  Carousel
 * @author  texpatnyc
 * @date    4/17/2020
 * @description Reusable component for styling a group of components
 *              in a specific way such that we can cycle through
 *              multiple "pages" of them.
 *
 * ************************************
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Figure from './Figure';
import styles from '../../stylesheets/modules/ui-templates/Carousel.scss';
import createClassString from '../../utils/createClassString.js';
import debounce from 'lodash/debounce';

const caretRight = 'images/icons/arrow-black-right.svg';
const caretLeft = 'images/icons/arrow-black-left.svg';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currPage: 0,
      windowWidth: window.innerWidth,
      isMobile: window.innerWidth <= 1000,
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.determineChildrenToRender = this.determineChildrenToRender.bind(this);
    this.updateWindowWidth = debounce(this.updateWindowWidth.bind(this), 300);
  }

  nextPage() {
    this.setState({ currPage: (this.state.currPage += 1) });
  }

  prevPage() {
    this.setState({ currPage: (this.state.currPage -= 1) });
  }
  determineChildrenToRender() {
    const { currPage, windowWidth } = this.state;
    const { children, perPage, perPageMobile } = this.props;

    // only use mobile settings if the prop is passed in
    const articlesPerPage = windowWidth <= 1000 && perPageMobile ? perPageMobile : perPage;

    const start = articlesPerPage * currPage;
    const end = start + articlesPerPage;

    const kids = children[0];

    if (end > kids.length) return kids.slice(-articlesPerPage);

    return kids.slice(start, end);
  }

  updateWindowWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth);
  }

  render() {
    const { carouselStyles, children, perPage, perPageMobile } = this.props;
    const { currPage, windowWidth } = this.state;
    const classString = createClassString(carouselStyles, styles);

    const childrenToRender = this.determineChildrenToRender();

    // only use mobile settings if the prop is passed in
    const articlesPerPage = windowWidth <= 1000 && perPageMobile ? perPageMobile : perPage;

    const numArticles = children[0].length;

    const pagesToLeft = currPage > 0;
    const pagesToRight = Math.ceil(numArticles / articlesPerPage) > currPage + 1;

    return (
      <div className={classString ? classString : styles.carousel}>
        <div className={styles.arrowContainer}>
          {pagesToLeft ? (
            <button className={styles.leftArrow} onClick={this.prevPage}>
              <Figure key="left-caret" imgSrc={caretLeft} />
            </button>
          ) : null}
        </div>
        <div className={styles.childContainer}>{childrenToRender}</div>
        <div className={styles.arrowContainer}>
          {pagesToRight ? (
            <button className={styles.rightArrow} onClick={this.nextPage}>
              <Figure key="right-caret" imgSrc={caretRight} />
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  carouselStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  perPage: PropTypes.number.isRequired,
  perPageMobile: PropTypes.number,
  children: PropTypes.node.isRequired, // all content for carousel
};

export default Carousel;
